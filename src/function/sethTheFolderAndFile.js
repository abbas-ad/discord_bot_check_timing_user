const fs = require("fs");
async function setFolder(message, clinet, adminNames, voicAction, time) {
  let joinTime;
  let leftTime;
  let totalTime;

  console.log(adminNames);

  if (voicAction == "joined") {
    joinTime = time;
    // adminNames == "<@820039811271229461>"
    //   ? (adminNames = "!Mrwho")
    //   : (adminNames = adminNames);

    try {
      fs.mkdirSync(adminNames);
      console.log(`the folder ${adminNames} was created`);
    } catch (error) {
      error.code == "EEXIST"
        ? fs.writeFile(`./errors/EEXIST.txt`, 'The dir named is exist', function (err) { console.log(err)})
        : fs.writeFile(`./errors/mkdirSync.txt`, error, function (err) { console.log(`the mddirSync Erorors its ${err}`)})
    }
    try {
      fs.writeFile(`./${adminNames}/time.txt`, joinTime, function (err) {`the writeFile Erorors its ${err}`});
    } catch (error) {
      fs.writeFile(`./errors/writeFile.txt`, error, function (err) { `the writeFile Erorors its ${err}`})
    }
  } else if (voicAction == "left") {
    // leftTime = time;
    // console.log(leftTime);

    // fs.readFile("input.txt", function (err, data) {
    //   console.log("Asynchronous read: " + data.toString());
    // });
  }
  // timePlayEmbeds.timePlayEmbeds(adminNames, message, clinet);
}

module.exports = { setFolder };
