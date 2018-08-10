const express = require('express');
const router = express.Router();
const animalsController = require('../controllers/animals.controller');
const userMiddleware = require('../middlewares/user.middlewares');
const animalMiddleware = require('../middlewares/animals.middleware');

router.get('/', userMiddleware.authenticateUser, animalsController.list);

router.get('/create', userMiddleware.authenticateUser, animalsController.create);
router.post('/create', userMiddleware.authenticateUser,animalsController.doCreate);

router.get('/:id/details', animalsController.details);
router.get('/:id/edit', animalsController.edit);
router.post('/:id/edit', animalsController.doEdit);

router.get('/:id/delete', animalsController.warnUser);

router.post('/userlist/:id/solicitar', animalsController.solicitarCruce);

router.post(
    '/:id/delete',
    animalsController.doDelete
);

router.get('/userlist', userMiddleware.authenticateUser, animalsController.showUserAnimals)

module.exports = router;
