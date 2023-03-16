const express = require("express");
const { register } = require("../../controllers/register");
const Router = express.Router();

Router.post("/users/register", register)
module.exports = Router;