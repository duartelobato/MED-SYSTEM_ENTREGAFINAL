var express = require('express');
var pacienteROUTE = express.Router();
var mPaciente = require('../models/pacienteMODEL');

pacienteROUTE.get('/', async function(req,res,next) {
    let pacientes = await mPaciente.getAllPacientes();
    res.send(pacientes);
    });

pacienteROUTE.post('/', async function(req,res,next) {
    let msg = await mPaciente.createPaciente(req.body);
    res.send(msg);
    });

pacienteROUTE.get('/ind', async function(req,res,next) {
    let ind = await mPaciente.getIndicador();
    res.send(ind);
    });

pacienteROUTE.get('/estados', async function(req,res,next) {
    let distest = await mPaciente.getAllDistest();
    res.send(distest);
    });
    
pacienteROUTE.get('/:cama_id', async function(req,res,next) {
    let cama_id = req.params.cama_id;
    let paciente = await mPaciente.getPaciente(cama_id);
    res.send(paciente);
    });    

pacienteROUTE.delete('/:pac_id', async function(req,res,next) {
    let pac_id = req.params.pac_id;
    let paciente = await mPaciente.deletePaciente(pac_id);
    res.send(paciente);
    });    


module.exports = pacienteROUTE;

