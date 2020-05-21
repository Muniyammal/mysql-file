 const getspeople=require("./test");
 const express = require("express");
 const getslist= require("./service");
 const Router = express.Router();
 const mysqlConnection = require("../connection");


 Router.get("/",getslist.getslist);


 
 

 module.exports = Router;