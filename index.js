const express = require("express");
const app = express();



const path = require('path')
// add template engine
const hbs = require('express-handlebars');
// setup template engine directory and files extensions
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
	extname: 'hbs',
	defaultLayout: 'main',
	layoutsDir: __dirname + '/views/layouts/',
}))
// setup static public directory
app.use(express.static('public'));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const mysql = require('mysql2')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
// create database connection
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "qwerty",
	database: "joga_sequelize"
})
con.connect(function(err){
	if (err) throw err;
	console.log("Connected to joga_sequelize db");
})


// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

// testing connection
sequelize
.authenticate()
.then(() => {
	console.log('Connected to the database.');
})
.catch(err => {
	console.error('Unable to connect to the database:', err);
});


// using routes and controllers
const articleRouter = require('./routes/article');
const authorRouter = require('./routes/author');
const editRouter = require('./routes/edit');
const apiRouter = require('./routes/api');
app.use('/', articleRouter);
app.use('/article', articleRouter)
app.use('/author', authorRouter)
app.use('admin/article', articleRouter)
app.use('/edit', editRouter)
app.use('/api', apiRouter)

// simple route 
//app.get("/", (req, res) => {
//	res.json({ message: "WElcome to application."});
//});

// listen requests
app.listen(3000, () => {
 console.log('Server is running on http://localhost:3000');
});
