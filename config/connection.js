// Set up MySQL connection.
var mysql = require("mysql");

// mysql://b382e8e4ca5ca4:f1cf2351@us-cdbr-east-02.cleardb.com/heroku_201d79e0878fddf?reconnect=true

var connection = mysql.createPool(process.env.CLEARDB_DATABASE_URL ||{
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  user: "b382e8e4ca5ca4",
  password: "f1cf2351",
  database: "heroku_201d79e0878fddf"
});

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
module.exports = connection;