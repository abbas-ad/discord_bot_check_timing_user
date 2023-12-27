const Discord = require("discord.js");
const setWarnEmbed = require("../embeds/serWarnEmbed");

function setWarn(message, client) {
  //TODO --> we can use data base and set the user warn in the database
  setWarnEmbed.warnEmbed(message, client);
}

module.exports = { setWarn };
