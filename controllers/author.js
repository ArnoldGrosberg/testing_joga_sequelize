// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

// read model data for table representation
const Author = require('../models/author')(sequelize, Sequelize.DataTypes);
const models = require('../models')

// get all data from table
const getAllAuthors = (req, res) => {
	Author.findAll()
	.then(authors => {
	console.log(authors)
	return res.status(200).json({ authors });
	})
	.catch (error => {
	return res.status(500).send(error.message);
	})
}

// show article by this slug
const getAuthorBySlug = (req, res) => {
	Author.findOne({
		where: {
			slug : req.params.slug
		}
	})/*
	models.Author.findByPk(req.params.id, {
		include: [{
			model: models.Article
		}],
	})*/
	.then(author => {
		console.log(author)
		return res.status(200).json({ author });
	})
	.catch (error => {
		return res.status(500).send(error.message);
	})
};

// show article by this id
const getAuthorbyId = (req, res) => {
	models.Author.findByPk(req.params.id, {
		include: [{
			model: models.Article
		}],
	})
	.then(author => {
		console.log(author)
		return res.status(200).json({ author });
	})
	.catch (error => {
		return res.status(500).send(error.message);
	})
};

// export controller functions
module.exports = {
	getAllAuthors,
	getAuthorBySlug,
	getAuthorbyId
};
