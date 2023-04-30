const express = require("express");
const userRoutes = express.Router();
const {register, login , current, sample} = require("../controllers/userController")


userRoutes.post('/register', register )

userRoutes.post('/login', login)

userRoutes.get('/current', current)


userRoutes.get('/sample', sample)
module.exports = userRoutes