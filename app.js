// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

const rutaMain = ('./routes/main.js')
const rutaHeroes = ('/routes/heroes.js')

/*/ Ruta Raíz / ➝ Home
app.get('/', function(req,res){
	res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en 	ti!.')
});/** */

//ruta heroes poner lo que falta aca va un export o algo parecido

// Ruta Créditos
app.get('/creditos', function(req, res){
	res.send('Autor: Josue Abi Rached')
})

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});


module.export= router