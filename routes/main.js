const express =require('express');
const router =express.Router();
const mainController = require('../../carpeta255/controllers/mainController');


 
// Ruta Raíz / ➝ Home
router.get('/',mainController.index);


module.export= router