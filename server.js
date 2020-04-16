const exphbs = require("express-handlebars");
const express = require("express");
const mysql = require("mysql");

const app = express();

// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3000;

// Use the express.static middleware to serve static content for the app from the root
app.use(express.static("/"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

