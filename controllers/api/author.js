// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

// read model data for table representation
const Author = require('../../models/author')(sequelize, Sequelize.DataTypes);
const models = require('../../models')


// show article by this slug
const getAuthorBySlug = (req, res) => {
	if(Object.keys(req.query).length === 0){
		return res.status(400).json({ 'error': 'Invalid request'});
	} else if (req.query.q === ''){
		return res.status(400).json({ 'error': 'Invalid request'});
	} else if (req.query.q){
	Author.findOne({
		where: {
			name : req.query.q
		}
	})
	.then(author => {
		console.log(author)
		return res.status(200).json({ author });
	})
	.catch (error => {
		return res.status(500).send(error.message);
	})
	} else if (req.query.id === ''){
		return res.status(400).json({ 'error': 'Invalid request'});
	} else if (req.query.id){
		models.Author.findByPk(req.query.id, {
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
		} else {
		return res.status(400).json({ 'error': 'Invalid request'});
	}
};

// export controller functions
module.exports = {
	getAuthorBySlug
};
