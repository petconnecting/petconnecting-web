const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');
//const userController = require('../controllers/users.controller')

/* GET home page. */

router.get('/', indexController.showHome)



module.exports = router;
