// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

// read model data for table representation
const models = require('../models')

// HTML content
const theString = `
<!DOCTYPE html>
<html>
<head>
<title>Editing menu</title>
</head>
<body>
<h1>Create article</h1>
</body>
</html>
			` ;

theJSONstring = JSON.stringify(theString);

// show editing ui by this id
const getEditbyId = (req, res) => {
	models.Article.findByPk(req.params.id, {
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
		// I need to show HTML but how??
		return res.status(200).json(
    {
    }
);
	})
	.catch (error => {
		return res.status(500).send(error.message);
	})
};

// export controller functions
module.exports = {
	getEditbyId
};
