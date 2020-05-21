const mysql =require("mysql");
const mysqlConnection =mysql.createConnection({
    host : "localhost",
    user :"root",
    password :"Bakya@123",
    database :"sqlconnect",
    multipleStatements : true       

});

mysqlConnection.connect((err) =>{

 if(!err)
  {
      console.log("connected");
  }
  else
  {
      console.log("connection failed");
  }

});


module.exports = mysqlConnection;