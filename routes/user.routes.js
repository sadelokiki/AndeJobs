'use strict'

var express = require('express');
var router = express.Router();

module.exports = function(app){
  var userCtrl = require('../controllers/user-controller');   

  router.route('/users')
    .get(userCtrl.listUsers)
    .post(userCtrl.createUser)

  router.route("/users/:user_id")
    .get(userCtrl.viewUser)
    .put(userCtrl.updateUser)
    .delete(userCtrl.deleteUser, userCtrl.verifyToken)

  router.route("/authenticate")
    .post(userCtrl.verifyUser)

  router.route("/authenticateToken")
    .post(userCtrl.verifyToken)

app.use('/api', router)
};
