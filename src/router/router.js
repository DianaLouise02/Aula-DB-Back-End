const { Router } = require("express");
const userRoutes = require("./routerUser");
const UserController= require('../controller/UserController');
const authenticateToken = require('../middlewares/authenticateToken');

const router = Router();

// /api/user /
router.use('/user', userRoutes);


router.post('/login',(req,res) => {
    UserController.login(req,res)
});


module.exports = router;

