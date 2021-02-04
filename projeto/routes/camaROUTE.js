var express = require('express');
var camaROUTE = express.Router();
var mCama = require('../models/camaMODEL');

camaROUTE.get('/', async function(req,res,next) {
 let camas = await mCama.getAllCamas();
 res.send(camas);
});

camaROUTE.get('/rows', async function(req,res,next) {
    let rows = await mCama.getAllRows();
    res.send(rows);
   });

camaROUTE.get('/ind', async function(req,res,next) {
    let ind = await mCama.getIndicador();
    res.send(ind);
   });

camaROUTE.put('/', async function(req,res,next) {
    let msg = await mCama.insertCama(req.body);
    res.send(msg);
   });

camaROUTE.put('/:cama_id', async function(req,res,next) {
    let cama_id = req.params.cama_id;
    let cama = await mCama.putCama(cama_id);
    res.send(cama);
    });    

module.exports = camaROUTE;
