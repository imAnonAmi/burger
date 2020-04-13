var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");

var app = express();

// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Use the express.static middleware to serve static content for the app from the root
app.use(express.static("/"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  /*----------------------------------
  SET password below for testing!!!
  ----------------------------------*/
  password: "",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});