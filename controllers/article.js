// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')
// import database connection
const con = require('../utils/db');

// read model data for table representation
const models = require('../models')

// get all data from table
const getAllArticles = (req, res) => {
	models.Article.findAll()
	.then(articles => {
	console.log(articles)
	return res.status(200).json({ articles });
	})
	.catch (error => {
	return res.status(500).send(error.message);
	})
}

// show article by this slug
const getArticleBySlug = (req, res) => {
	models.Article.findOne({
		where: {
			slug : req.params.slug
		},
		include: [
		{
			model: models.Author
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
		//return res.render('article', {
		//	article: article
		//})
		 return res.status(200).json({ article });
	})
	.catch (error => {
		return res.status(500).send(error.message);
	})
};

// show article by this slug
const getArticleBySlugWithItsTemplate = (req, res) => {
	let query = `SELECT *,Articles.name as article_name, Authors.name as author_name FROM Articles INNER JOIN Authors ON Authors.id = Articles.author_id WHERE slug="${req.params.slug}"`
	let article
	con.query(query, (err, result) => {
		if (err) throw err;
		article = result
		console.log(article)
		res.render('article', {
			article: article
		})
	});
};




// show all articles - index page app.get('/',
const getArticleTemplates = (req, res) => {
	let query = "SELECT * FROM Articles";
	let articles = []
	con.query(query, (err, result) => {
	if (err) throw err;
	articles = result
	res.render('index', {
		articles: articles
	})
})
};


// show articles by author app.get('/author/:id',
 const getArticleAuthorWithItsTemplate = (req, res) => {
	// query for the name and articles
	let authorQuery = `SELECT name as author_name FROM Authors WHERE id = ${req.params.id}`
	let author
	let articlesQuery = `SELECT * FROM Articles WHERE author_id = ${req.params.id}`
	let articles
	// does the query
	con.query(articlesQuery, (err, result) => {
		if (err) throw err;
		articles = result
	})
	con.query(authorQuery, (err, result) => {
		if (err) throw err;
		author = result
		// render author and articles tags.
		res.render('author', {
			author: author,
			articles: articles
		})
	})
};

// export controller functions
module.exports = {
	getAllArticles,
	getArticleBySlug,
	getArticleBySlugWithItsTemplate,
	getArticleTemplates,
	getArticleAuthorWithItsTemplate
};
