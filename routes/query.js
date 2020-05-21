const mysql = require("mysql");
const mysqlConnection = require("../connection");
const {getslist} = require("./service");
exports.getspeople =async(req,res)=>{
    mysqlConnection.query("SELECT * from people",async(err, rows, fields) => {
     if(!err)
     {
         await res.send(rows);
     }
     else
     {
         console.log('unhandledRejection',err);
     }
  });
};
