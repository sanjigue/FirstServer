'use strict'

var express = require('express');

var app = express();

var api = express.Router();

//Controller
const showBBQ = (req, res) => {
    res.status(200).send({
        message: 'Nuestra barbacoa clásica: Salsa Barbacoa, Cebolla, Bacon, Salchichas,Ternera y Extra de Queso.'
    });
};

const showCheese = (req, res) => {
    res.status(200).send({
        message: 'Los 4 quesos en una mezcla suave: emmental, gouda, azul y mozzarella.'
    });
};

const showChicken = (req, res) => {
    res.status(200).send({
        message: 'Desde Texas llega esta explosión de sabor: Salsa Barbacoa, Cebolla Caramelizada, doble de Pollo moruno.'
    });
};

const showHawaiian = (req, res) => {
    res.status(200).send({
        message: 'Jamón, Piña y Xtra de Queso. A veces lo sencillo sorprende.'
    });
};

const login = (req, res) => {
    res.status(200).send({
        message: '¡Welcome!'
    });
};


//Router
api.get('/login', login);

api.get('/bbq', showBBQ);
api.get('/4Cheese', showCheese);
api.get('/Chicken', showChicken);
api.get('/Hawaiian', showHawaiian);

//Base Route
app.use('/pizzas', api);

//boot server
var port = 40000;
app.listen(port, () => {
    console.log("Listening on http://localhost:" + port);
});