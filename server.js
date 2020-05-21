const mysql =require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const PeopleRoutes = require("./routes/people");
const queryRoutes = require("./routes/query");
const mysqlConnection = require("./connection");
const app = express();
app.use(bodyParser.json());

app.use("/people",PeopleRoutes);


app.listen(3001);