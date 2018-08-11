const express = require("express");
const router = express.Router();
const animalsController = require("../controllers/animals.controller");
const userMiddleware = require("../middlewares/user.middlewares");

router.get("/", userMiddleware.authenticateUser, animalsController.list);

router.get(
  "/create",
  userMiddleware.authenticateUser,
  animalsController.create
);
router.post(
  "/create",
  userMiddleware.authenticateUser,
  animalsController.doCreate
);

router.get("/:id/details",userMiddleware.authenticateUser, animalsController.details);
router.get("/:id/edit",userMiddleware.authenticateUser, animalsController.edit);
router.post("/:id/edit",userMiddleware.authenticateUser, animalsController.doEdit);

router.get("/:id/delete", animalsController.warnUser);

router.post("/userlist/:id/solicitar", animalsController.solicitarCruce);

router.post("/:id/delete", animalsController.doDelete);

router.get(
  "/userlist",
  userMiddleware.authenticateUser,
  animalsController.showUserAnimals
);

module.exports = router;
