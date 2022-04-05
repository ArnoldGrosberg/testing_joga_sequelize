// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

// read model data for table representation
const Tags = require('../../models/tags')(sequelize, Sequelize.DataTypes);
const models = require('../../models')

// show article by this slug
const getTagsBySlug = (req, res) => {
	if(Object.keys(req.query).length === 0){
		return res.status(400).json({ 'error': 'Invalid request'});
	} else if (req.query.tag === ''){
		return res.status(400).json({ 'error': 'Invalid request'});
	} else if (req.query.tag){
	Tags.findOne({
		where: {
			name : req.query.tag
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
		models.Tags.findByPk(req.query.id, {
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
	getTagsBySlug
};