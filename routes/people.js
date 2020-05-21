 const {getspeople}=require("./service");
 const express = require("express");
 const {getslist} = require("./service");
 const Router = express.Router();
 const mysqlConnection = require("../connection");


 Router.get("/",getslist);


 
 

 module.exports = Router;