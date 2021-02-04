var express = require('express');
var estadoROUTE = express.Router();
var mEstado = require('../models/estadoMODEL');

estadoROUTE.get('/', async function(req,res,next) {
 let estados = await mEstado.getAllEstados();
 res.send(estados);
});

module.exports = estadoROUTE;