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

//#region Categories Controllers
const CategoriesController = require('../controllers/categoriesController/categories');
const Products_ImageController = require('../controllers/categoriesController/prducts_image');
const PricesController = require('../controllers/categoriesController/prices');
const ProductsController = require('../controllers/categoriesController/products');
const Sub_categoriesController = require('../controllers/categoriesController/sub_categories');
//#endregion

//#region User Controllers
const UserController = require('../controllers/userController/user');
const OrdersController = require('../controllers/userController/orders');
const Info_user_registerController = require('../controllers/userController/info_user_register');
const Log_login_userController = require('../controllers/userController/log_login_user');
//#endregion

//#region Register Controllers
const EstablishmentsRegisterController = require('../controllers/registerController/establishments_register');
//#endregion

//#region Establishments 
routes.get('/establishments', verifyJWT, EstablishmentsController.Get);

routes.get('/establishments/:id', verifyJWT, EstablishmentsController.GetId);

// routes.post('/establishments', verifyJWT, EstablishmentsController.Post);

routes.put('/establishments/:id?', verifyJWT, EstablishmentsController.Put);

routes.delete('/establishments/:id', verifyJWT, EstablishmentsController.Delete);
//#endregion 

//#region Establishments Hours
routes.get('/establishments/hours', verifyJWT, Establishments_hoursController.Get);

routes.get('/establishments/hours/:id', verifyJWT, Establishments_hoursController.GetId);

routes.post('/establishments/hours', verifyJWT, Establishments_hoursController.Post);

routes.put('/establishments/hours/:id?', verifyJWT, Establishments_hoursController.Put);

routes.delete('/establishments/hours/:id', verifyJWT, Establishments_hoursController.Delete);
//#endregion 

//#region Establishments Informations
routes.get('/establishments/informations', verifyJWT, Establishments_informationsController.Get);

routes.get('/establishments/informations/:id', verifyJWT, Establishments_informationsController.GetId);

routes.post('/establishments/informations', verifyJWT, Establishments_informationsController.Post);

routes.put('/establishments/informations/:id?', verifyJWT, Establishments_informationsController.Put);

routes.delete('/establishments/informations/:id', verifyJWT, Establishments_informationsController.Delete);
//#endregion 

//#region Establishments Registration
routes.get('/establishments/registration', verifyJWT, Establishments_registrationController.Get);

routes.get('/establishments/registration/:id', verifyJWT, Establishments_registrationController.GetId);

// routes.post('/establishments/registration', verifyJWT, Establishments_registrationController.Post);

routes.put('/establishments/registration/:id?', verifyJWT, Establishments_registrationController.Put);

routes.delete('/establishments/registration/:id', verifyJWT, Establishments_registrationController.Delete);
//#endregion 

//#region Establishments Responsible
routes.get('/establishments/responsible', verifyJWT, Establishments_responsibleController.Get);

routes.get('/establishments/responsible/:id', verifyJWT, Establishments_responsibleController.GetId);

routes.post('/establishments/responsible', verifyJWT, Establishments_responsibleController.Post);

routes.put('/establishments/responsible/:id?', verifyJWT, Establishments_responsibleController.Put);

routes.delete('/establishments/responsible/:id', verifyJWT, Establishments_responsibleController.Delete);
//#endregion 


//#region Categories Responsible
routes.get('/categories', verifyJWT, CategoriesController.Get);

routes.get('/categories/:id', verifyJWT, CategoriesController.GetId);

routes.post('/categories', verifyJWT, CategoriesController.Post);

routes.put('/categories/:id?', verifyJWT, CategoriesController.Put);

routes.delete('/categories/:id', verifyJWT, CategoriesController.Delete);
//#endregion 


//#region Prices Responsible
routes.get('/prices', verifyJWT, PricesController.Get);

routes.get('/prices/:id', verifyJWT, PricesController.GetId);

routes.post('/prices', verifyJWT, PricesController.Post);

routes.put('/prices/:id?', verifyJWT, PricesController.Put);

routes.delete('/prices/:id', verifyJWT, PricesController.Delete);
//#endregion 

//#region Prducts_image Responsible
routes.get('/prducts_image', verifyJWT, Products_ImageController.Get);

routes.get('/prducts_image/:id', verifyJWT, Products_ImageController.GetId);

routes.post('/prducts_image', verifyJWT, Products_ImageController.Post);

routes.put('/prducts_image/:id?', verifyJWT, Products_ImageController.Put);

routes.delete('/prducts_image/:id', verifyJWT, Products_ImageController.Delete);
//#endregion 

//#region Prducts Responsible
routes.get('/products', verifyJWT, ProductsController.Get);

routes.get('/products/:id', verifyJWT, ProductsController.GetId);

routes.post('/products', verifyJWT, ProductsController.Post);

routes.put('/products/:id?', verifyJWT, ProductsController.Put);

routes.delete('/products/:id', verifyJWT, ProductsController.Delete);
//#endregion 


//#region Prducts Responsible
routes.get('/sub_categories', verifyJWT, Sub_categoriesController.Get);

routes.get('/sub_categories/:id', verifyJWT, Sub_categoriesController.GetId);

routes.post('/sub_categories', verifyJWT, Sub_categoriesController.Post);

routes.put('/sub_categories/:id?', verifyJWT, Sub_categoriesController.Put);

routes.delete('/sub_categories/:id', verifyJWT, Sub_categoriesController.Delete);
//#endregion 

//#region User Responsible
routes.get('/user', verifyJWT, UserController.Get);

routes.get('/user/:id', verifyJWT, UserController.GetId);

routes.post('/user', verifyJWT, UserController.Post);

routes.put('/user/:id?', verifyJWT, UserController.Put);

routes.delete('/user/:id', verifyJWT, UserController.Delete);
//#endregion 

//#region Orders Responsible
routes.get('/orders', verifyJWT, OrdersController.Get);

routes.get('/orders/:id', verifyJWT, OrdersController.GetId);

routes.post('/orders', verifyJWT, OrdersController.Post);

routes.put('/orders/:id?', verifyJWT, OrdersController.Put);

routes.delete('/orders/:id', verifyJWT, OrdersController.Delete);
//#endregion 

//#region Info_user_register Responsible
routes.get('/Info_user_register', verifyJWT, Info_user_registerController.Get);

routes.get('/Info_user_register/:id', verifyJWT, Info_user_registerController.GetId);

routes.post('/Info_user_register', verifyJWT, Info_user_registerController.Post);

routes.put('/Info_user_register/:id?', verifyJWT, Info_user_registerController.Put);

routes.delete('/Info_user_register/:id', verifyJWT, Info_user_registerController.Delete);
//#endregion 

//#region Log_login_user Responsible
routes.get('/Log_login_user', verifyJWT, Log_login_userController.Get);

routes.get('/Log_login_user/:id', verifyJWT, Log_login_userController.GetId);

routes.post('/Log_login_user', verifyJWT, Log_login_userController.Post);

routes.put('/Log_login_user/:id?', verifyJWT, Log_login_userController.Put);

routes.delete('/Log_login_user/:id', verifyJWT, Log_login_userController.Delete);
//#endregion 

//#region Register
routes.post('/register/establishments', verifyParams, EstablishmentsRegisterController.Post);
//#endregion

module.exports = routes;