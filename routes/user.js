const express = require('express');
const routes = express.Router();
const { Getalluser, Adduser, DeletebyId, updatebyId, getbyId } = require('../controllers/user');
const {authenticateJWT} = require('../middleware/authMiddleware')

routes.route('/')
    .get(authenticateJWT, Getalluser) 
    .post(authenticateJWT, Adduser); 

routes.route('/:id')
    .get(authenticateJWT, getbyId)    
    .patch(authenticateJWT,updatebyId)  
    .delete(authenticateJWT, DeletebyId); 
module.exports = {
    routes
};
