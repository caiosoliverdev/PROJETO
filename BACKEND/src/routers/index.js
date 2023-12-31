const express = require('express');
const routes = express.Router();

const EstablishmentsController = require('../controllers/establishmentsController/establishments');
const EstablishmentsRegisterController = require('../controllers/registerController/establishments_register');

const { verifyJWT, verifyParams } = require('../auth');

//#region Establishments 
routes.get('/establishments', verifyJWT, EstablishmentsController.Get);

routes.get('/establishments/:id', verifyJWT, EstablishmentsController.GetId);

// routes.post('/establishments', verifyJWT, EstablishmentsController.Post);

routes.put('/establishments/:id?', verifyJWT, EstablishmentsController.Put);

routes.delete('/establishments/delete', verifyJWT, EstablishmentsController.Delete);
//#endregion 

//#region Establishments Register
routes.post('/register/establishments', verifyParams, EstablishmentsRegisterController.Post);

//#endregion

module.exports = routes;