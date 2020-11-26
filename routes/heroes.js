const express =require('express');
const router =express.Router();

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req,res) => {
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:id', (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.filter(heroe => {
		return heroe.id == req.params.id
	});
	
	if(heroe[0] == undefined){
		res.send('Heroe no encontrado')
	}else{
		res.send(`Hola, mi nombre es ${heroe[0].nombre} y soy ${heroe[0].profesion}`)
	}
	
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.filter(heroe => {
		return heroe.id == req.params.id
	});
	if(heroe[0] == undefined){
		res.send('No encontramos un héroe para mostrarte su biografía')
	}else if(req.params.ok){
		res.send(`
		Héroe: ${heroe[0].nombre}\n
		 || Reseña: ${heroe[0].resenia}`)
	}else{
		res.send(`${heroe[0].nombre} dice: Lamento que no quieras saber más de mí :(`)
	}
	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	
});


module.export= router