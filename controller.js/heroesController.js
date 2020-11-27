let heroes = require ('../data/heroes.json')

module.exports = {
    mostrarJSON : function (req, res){
        res.send (heroes)
    }
}