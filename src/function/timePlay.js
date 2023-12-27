const sethTheFolderAndFile = require("./sethTheFolderAndFile");
const savingData = require("./savingData");
async function name(message, clinet, connections) {
  if (message.type === "GUILD_MEMBER_JOIN") return;

  let adminNames;
  let actions;
  message.embeds.forEach((embed) => {
    const myArray = embed.description.split(" ");
    adminNames = myArray[0];
    actions = myArray[1];
  });

  if (
    adminNames.includes("**<@!1030873909635063848>") || // amirMn
    adminNames.includes("**<@!1081947989544816796>")  ||// harlod
    adminNames.includes("**<@!1005467898606784512>")  // Gomey
  ) {

    // ? @param (adminNames, voiceAction, time) -- ) creating the folder && file and saving the admins  time into rhe file
    // sethTheFolderAndFile.setFolder(message, clinet, adminNames, voicAction, time)

    // ? @param (adminNames, voiceAction, time) -- ) saving adminsi indo into the data base
    savingData.savingDataInDatabase(message, clinet, adminNames, actions, connections)
  }
}

module.exports = { name };
