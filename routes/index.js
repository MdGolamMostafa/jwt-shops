const express = require('express');
const router = express.Router();
// const middleware = require('../middlewares/middleware');

/* GET home page. */ 
router.get('/',function(req, res, next) {
  res.json({message: 'Bismillah Hello-jwt token'} );
});

module.exports = router;
