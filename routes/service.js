const mysql = require("mysql");
const mysqlConnection = require("../connection");
const {getspeople}=require("./query");
exports.getslist = async(req, res,next) => {
        try{
           const result = await mysqlConnection.query("SELECT * from people", async(err, rows, fields) => {
           
          return  await res.send(rows);
        })
        
      }
      catch(err){
      next(err);
    }
}