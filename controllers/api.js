// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')
// read model data for table representation
const models = require('../models');

// some const
var message = '';
// show something by this slug
const getApiBySlug = (req, res) => {
		message = req.params.slug;
	//.then(message => {
		console.log(message)
		return res.status(200).json({ message });
	//})
	//.catch (error => {
	//	return res.status(500).send(error.message);
	//})
};


// export controller functions
module.exports = {
	getApiBySlug
};
