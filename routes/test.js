 const mysql = require("mysql");
const mysqlConnection = require("../connection");
 const {getslist} = require("./service");
 exports.getspeople =async() => {
    mysqlConnection.query("SELECT * from people",async(err, rows, fields) => {
      if(!err)
      {
        return rows;
      }
      else
      {
          console.log('unhandledRejection',err);
      }
   })
}
