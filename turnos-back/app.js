const express = require("express");
const bodyParser = require("body-parser");

const app = express(); //inicializacion de express
const { API_VERSION } = require('./config');

// Load Routings
const userRoutes = require ("./routers/user");

app.use(bodyParser.urlencoded({ extended: false })); // para rescibir data en el body http
app.use(bodyParser.json()); // encodea la data del body en json

// Configure Heder HTTP
//...

// Route Basic
app.use(`/api/${API_VERSION}`, userRoutes)

module.exports = app;