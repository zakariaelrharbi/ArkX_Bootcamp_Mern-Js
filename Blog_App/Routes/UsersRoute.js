const express = require('express');
const UserRouter = express.Router();
const Register = require('../Controller/Usercontroller');

UserRouter.post('/Register', Register);
module.exports = UserRouter;
