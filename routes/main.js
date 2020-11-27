const express =require('express');
const router =express.Router();
const mainController = require('../controllers/mainController');


 
// Ruta Raíz / ➝ Home
router.get('/',mainController.index);

// Ruta Créditos
router.get('/creditos',mainController.creditos)

module.exports= router