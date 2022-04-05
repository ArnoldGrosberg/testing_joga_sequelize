// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

// read model data for table representation
const models = require('../../models')


// show article by this slug
const getArticleBySlug = (req, res) => {
	if(Object.keys(req.query).length === 0){
		return res.status(400).json({ 'error': 'Invalid request'});
	} else if (req.query.q === ''){
		return res.status(400).json({ 'error': 'Invalid request'});
	} else if (req.query.q){
		models.Article.findOne({
		where: {
			slug : req.query.q
		},
		include: [
		{
			model: models.Author,
		},
		{
			model: models.Tags,
			through: {
				model: models.ArticleTag
			}
		}
		],
	})
	.then(article => {
		console.log(article)
		return res.status(200).json({ article });
	})
	.catch (error => {
		return res.status(500).send(error.message);
	})
	} else if (req.query.id === ''){
		return res.status(400).json({ 'error': 'Invalid request'});
	} else if (req.query.id){
			models.Article.findByPk(req.query.id, {
		include: [
		{
			model: models.Author,
		},
		{
			model: models.Tags,
			through: {
				model: models.ArticleTag
			}
		}
		],
	})
	.then(article => {
		console.log(article)
		return res.status(200).json({ article });
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
	getArticleBySlug
};
