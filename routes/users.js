var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

/* GET users listing. */
router.post("/register",userController.register);
router.post("/login",userController.login);
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
