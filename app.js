const express = require("express");
const app = express();

const recipesRoutes = require('./api/routes/recipes')

app.use('/recipes', recipesRoutes);

module.exports = app;