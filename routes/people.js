 const {getspeople}=require("./query");
 const express = require("express");
 const Router = express.Router();
 const mysqlConnection = require("../connection");

 Router.get("/",getspeople);
 
 

 module.exports = Router;