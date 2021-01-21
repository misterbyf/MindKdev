const { Router } = require("express");
const userController = require("../controllers/user.controller");
const passport = require("passport");

const router = Router();

router.post("/user", userController.createUser);

router.get("/user", passport.authenticate('jwt', { session: false }), userController.getUsers);

router.get('/user/:id', userController.getOneUsers);

router.put('/user', userController.updateUser);

router.delete('/user/:id', userController.deleteUser);



module.exports = router;