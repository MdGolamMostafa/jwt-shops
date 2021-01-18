const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop.controller');
const userController = require('../controllers/user.controller');

router.post('/',userController.isAuthenticated, shopController.create);

router.get('/getAll',shopController.getAll);

router.get('/:id',userController.isAuthenticated,shopController.getById);
router.put('/update/:id', userController.isAuthenticated, shopController.updateDataId);
router.delete('/delete/:id',userController.isAuthenticated, shopController.deleteDataId);

module.exports = router; 