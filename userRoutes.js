

const express = require('express');
const {singin, singup } = require('../controllers/userConroller');

const userRoute = express.Router();


userRoute.post('/singup',singup);

userRoute.post('/singin',singin);


module.exports = userRoute;