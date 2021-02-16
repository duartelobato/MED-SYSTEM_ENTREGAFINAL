var express = require('express');
var alaROUTE = express.Router();
var mAla = require('../models/alaMODEL');

alaROUTE.get('/', async function(req,res,next) {
    let estados = await mAla.getAllEstados();
    res.send(estados);
    });

alaROUTE.get('/ocupadas', async function(req,res,next) {
    let ocupadas = await mAla.getAllOcupadas();
    res.send(ocupadas);
   });
   
module.exports = alaROUTE;