const express = require('express');

const route = express.Router();

const { createPlanet, getAllPlanet, getPlanets, getOnePlanet, putPlanet, deletePlanet } = require('../controller/index')


route.post('/create/:number', createPlanet)
route.get('/all/planet', getAllPlanet)
route.get('/all/:number', getPlanets)
route.get('/one/id/:id', getOnePlanet)
route.put('/one/edit/:id', putPlanet)
route.delete('/one/delete/:id', deletePlanet)



module.exports = route;