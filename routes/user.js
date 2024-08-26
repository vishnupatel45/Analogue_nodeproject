const express = require('express');
const routes = express.Router();
const { Getalluser, Adduser, DeletebyId, updatebyId, getbyId } = require('../controllers/user');

routes.route('/')
    .get(Getalluser) 
    .post(Adduser); 

routes.route('/:id')
    .get(getbyId)    
    .patch(updatebyId)  
    .delete(DeletebyId); 
module.exports = {
    routes
};
