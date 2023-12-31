const express = require('express');
const { verifyJWT, verifyParams } = require('../auth');
const routes = express.Router();

//#region Establishments Controllers
const EstablishmentsController = require('../controllers/establishmentsController/establishments');
const Establishments_hoursController = require('../controllers/establishmentsController/establishments_hours');
const Establishments_informationsController = require('../controllers/establishmentsController/establishments_informations');
const Establishments_registrationController = require('../controllers/establishmentsController/establishments_registration');
const Establishments_responsibleController = require('../controllers/establishmentsController/establishments_responsible');
//#endregion

//#region Register Controllers
const EstablishmentsRegisterController = require('../controllers/registerController/establishments_register');
//#endregion

//#region Establishments 
routes.get('/establishments', verifyJWT, EstablishmentsController.Get);

routes.get('/establishments/:id', verifyJWT, EstablishmentsController.GetId);

// routes.post('/establishments', verifyJWT, EstablishmentsController.Post);

routes.put('/establishments/:id?', verifyJWT, EstablishmentsController.Put);

routes.delete('/establishments/delete', verifyJWT, EstablishmentsController.Delete);
//#endregion 

//#region Establishments Hours
routes.get('/establishments/hours', verifyJWT, Establishments_hoursController.Get);

routes.get('/establishments/hours/:id', verifyJWT, Establishments_hoursController.GetId);

routes.post('/establishments/hours', verifyJWT, Establishments_hoursController.Post);

routes.put('/establishments/hours/:id?', verifyJWT, Establishments_hoursController.Put);

routes.delete('/establishments/hours/delete', verifyJWT, Establishments_hoursController.Delete);
//#endregion 

//#region Establishments Informations
routes.get('/establishments/informations', verifyJWT, Establishments_informationsController.Get);

routes.get('/establishments/informations/:id', verifyJWT, Establishments_informationsController.GetId);

routes.post('/establishments/informations', verifyJWT, Establishments_informationsController.Post);

routes.put('/establishments/informations/:id?', verifyJWT, Establishments_informationsController.Put);

routes.delete('/establishments/informations/delete', verifyJWT, Establishments_informationsController.Delete);
//#endregion 

//#region Establishments Registration
routes.get('/establishments/registration', verifyJWT, Establishments_registrationController.Get);

routes.get('/establishments/registration/:id', verifyJWT, Establishments_registrationController.GetId);

// routes.post('/establishments/registration', verifyJWT, Establishments_registrationController.Post);

routes.put('/establishments/registration/:id?', verifyJWT, Establishments_registrationController.Put);

routes.delete('/establishments/registration/delete', verifyJWT, Establishments_registrationController.Delete);
//#endregion 

//#region Establishments Responsible
routes.get('/establishments/responsible', verifyJWT, Establishments_responsibleController.Get);

routes.get('/establishments/responsible/:id', verifyJWT, Establishments_responsibleController.GetId);

routes.post('/establishments/responsible', verifyJWT, Establishments_responsibleController.Post);

routes.put('/establishments/responsible/:id?', verifyJWT, Establishments_responsibleController.Put);

routes.delete('/establishments/responsible/delete', verifyJWT, Establishments_responsibleController.Delete);
//#endregion 

//#region Register
routes.post('/register/establishments', verifyParams, EstablishmentsRegisterController.Post);
//#endregion

module.exports = routes;