const Discord = require("discord.js");
const mysql = require("mysql");

async function savingTheDialyTimes(clinet, adminNames) {
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
    }
  });
  setInterval(() => {
    connections.query(
      `SELECT * FROM time_play WHERE tagsId = '${adminNames}'`,
      async (error, results, fields) => {
        error &&
          fs.writeFile(`./errors/UpdataLeft.txt`, error, function (err) {
            console.log(err);
          });
        console.log(results);

        let totalTimeFromDb = Number(await results[0].total_time);

        if (results) {
          await connections.query(
            `UPDATE time_play SET total_time='1000', daily_times='${totalTimeFromDb}' WHERE tagsId = '${adminNames}'`,
            (error, results, fields) => {
              error &&
                fs.writeFile(`./errors/UpdataLeft.txt`, error, function (err) {
                  console.log(err);
                });
              console.log(results);

              var embed = new Discord.MessageEmbed()
                .setColor("#800000")
                .setDescription(`daily Times its = ${totalTimeFromDb} `)
                .setTimestamp();
              clinet.channels.cache
                .get("1081977991636189316")
                .send({ embeds: [embed] });
              console.log("++++++++++++++++");
            }
          );
        }
      }
    );
  }, 86400000);
}

module.exports = { savingTheDialyTimes };
