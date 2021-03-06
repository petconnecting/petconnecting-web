const express = require('express');
const router = express.Router();
const sessionsController = require('../controllers/sessions.controller');

router.get('/create', sessionsController.create);

router.post('/create', sessionsController.doCreate);

router.get('/logout', sessionsController.delete);

module.exports = router;
