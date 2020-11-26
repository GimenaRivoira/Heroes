const express = require ('express')
const app = express()

module.exports = {
    leerJSON : (req, res) => {
        const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));
    },
    mostrarJSON : (req, res) =>{
        res.send (this.leerJSON())
    }
}