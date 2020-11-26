const express =require('express');
const router =express.Router();
const heroesController = require('../controller.js/heroesController');

app.get('/heroes', heroesController.mostrarJSON)

module.exports = router