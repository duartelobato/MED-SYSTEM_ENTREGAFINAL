var express = require('express');
var alaROUTE = express.Router();
var mAla = require('../models/alaMODEL');

alaROUTE.get('/', async function(req,res,next) {
 let alas = await mAla.getAllAlas();
 res.send(alas);
});

module.exports = alaROUTE;
