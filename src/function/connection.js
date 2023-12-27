const mysql = require("mysql");

function connection() {
    const connections = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "mysql",
        database: "discord_bot",
      });
      
      connections.connect(function (err) {
        if (err) {
          console.log(err);
          console.log("we cant making connection with db");
        } else {
          console.log("connect with db !!");
          return connections
        }
      });
}

module.exports = {connection}