const express = require('express');
const router = express.Router();
const animalsController = require('../controllers/animals.controller');


router.get('/',animalsController.list);

router.get('/create', animalsController.create);
router.post('/create',animalsController.doCreate);

router.get('/:id/details', animalsController.details);
router.get('/:id/edit', animalsController.edit);
router.post('/:id/edit', animalsController.doEdit);
router.post('/:id/delete', animalsController.doDelete);

module.exports = router;
