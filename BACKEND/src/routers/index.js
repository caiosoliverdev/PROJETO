const express = require('express');
const routes = express.Router();

const EstablishmentsController = require('../controllers/establishmentsController/establishments');

//#region Establishments 
routes.get('/establishments', EstablishmentsController.Get);

routes.get('/establishments/:id', EstablishmentsController.GetId);

routes.post('/establishments', EstablishmentsController.Post);

routes.put('/establishments/:id?', EstablishmentsController.Put);

routes.delete('/establishments/delete', EstablishmentsController.Delete);
//#endregion 


module.exports = routes;