const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller')

router.get('/signup', userController.create)
router.post('/signup', userController.doCreate)

module.exports = router;
