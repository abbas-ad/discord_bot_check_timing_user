const fs = require("fs");
const savingTheDialyTimes = require("../function/savingTheDialyTimes");

async function savingDataInDatabase(
  message,
  clinet,
  adminNames,
  actions,
  connections
) {
  let joinTime;
  let leftTime;
  let totalTime;
  if (actions == "joined") {
    const d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();

    joinTime = `${hour}:${min}`;
    joinTime.length == "4"
      ? (joinTime = `${hour}:0${min}`)
      : (joinTime = joinTime);
    console.log(`adminnames = ${adminNames}`);
    await connections.query(
      `UPDATE time_play SET join_time='${joinTime}',status='joined' WHERE tagsId = '${adminNames}'`,
      (error, results, fields) => {
        error &&
          fs.writeFile(`./errors/Updata.txt`, error, function (err) {
            console.log(err);
          });
        console.log(error);
        console.log(results);
      }
    );
  } else if (actions == "left") {
    const d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    leftTime = `${hour}${min}`;

    if (leftTime.length == "3") {
      leftTime = `${hour}0${min}`;
    }

    await connections.query(
      `SELECT * FROM time_play WHERE tagsId = '${adminNames}'`,
      async (error, results, fields) => {
        error &&
          fs.writeFile(`./errors/UpdataLeft.txt`, error, function (err) {
            console.log(err);
          });
        console.log(results);

        let joinTimeFromDb = await results[0].join_time;
        let totalTimeFromDb = Number(await results[0].total_time);

        joinTimeFromDb = joinTimeFromDb.replace(":", "");
        joinTimeFromDb = Number(joinTimeFromDb);
        leftTime = Number(leftTime);

        console.log(
          `type of joinTime form db its ${typeof joinTimeFromDb} and content equeles to = ${joinTimeFromDb}`
        );
        console.log(
          `type of totalTimes form db its ${typeof totalTimeFromDb} and content equeles to = ${totalTimeFromDb}`
        );
        console.log(
          `type of leftTimes  its ${typeof leftTime} and content equeles to = ${leftTime}`
        );

        totalTime = leftTime - joinTimeFromDb + totalTimeFromDb;

        if (results) {
          console.log(`totalTimes ${totalTime} type of ${typeof totalTime}`);

          await connections.query(
            `UPDATE time_play SET left_time='${leftTime}',total_time='${totalTime}',status='left' WHERE tagsId = '${adminNames}'`,
            (error, results, fields) => {
              error &&
                fs.writeFile(`./errors/UpdataLeft.txt`, error, function (err) {
                  console.log(err);
                });
              console.log(results);
              //  ? @param (message, client, connections) --> calculet the daily Times and set in the database

              savingTheDialyTimes.savingTheDialyTimes(clinet, adminNames);
            }
          );
        }
      }
    );
  }


  //!`UPDATE time_play SET join_time='',status='' WHERE discord_id = 12345`
  //? "UPDATE time_play SET address = 'Canyon 123' WHERE address = 'Valley 345'"
  //? SELECT * FROM customers WHERE address = 'Park Lane 38'
}

module.exports = { savingDataInDatabase };
