const express = require('express');
const { getNotes, createNotes, deleteNotes, updateNotes } = require('../controllers/noteController');
const auth = require('../Middleware/auth');
const noteRout =  express.Router();

noteRout.get('/',auth,getNotes)

noteRout.post("/",auth,createNotes)

noteRout.delete('/:id',auth,deleteNotes);

noteRout.put('/:id',auth,updateNotes);

module.exports = noteRout;