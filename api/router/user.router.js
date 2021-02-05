const { Router } = require("express");
const userController = require("../controllers/user.controller");
const passport = require("passport");
const checkAuthorization = require("../middleware/acl");

const router = Router();

router.post("/user", [passport.authenticate('jwt', { session: false }),
    checkAuthorization([{
        permission: "adminPermission"
    }]),],  userController.createUser);

router.get("/user",  [passport.authenticate('jwt', { session: false }),
    checkAuthorization([{
        permission: "adminPermission"
    }]),], userController.getUsers);

router.get('/user/:id', passport.authenticate('jwt', { session: false }), userController.getOneUsers);

router.put('/user', passport.authenticate('jwt', { session: false }), userController.updateUser);

router.delete('/user/:id', passport.authenticate('jwt', { session: false }), userController.deleteUser);



module.exports = router;