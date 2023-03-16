const express = require("express");
const { login } = require("../../controllers/login");
const Router = express.Router();
const {tokencheck} = require("../../middleware/jwtAuthorization.js")
Router.post("/users/login",login);
// Router.get("/users/login",tokencheck,login);
module.exports = Router;
// console.log(module.exports)
