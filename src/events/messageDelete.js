const Discord = require("discord.js");
const MessageDeletedEmbed = require("../embeds/messageDeletedEmbed");


module.exports = {
  name: "messageDelete",
  desciption:
    "wen the message was deletet set log and sending to spacetioal Channel",
  once: false,
  async execute(message, client) {
    MessageDeletedEmbed.MessageDeletedEmbed(message, client)
    console.log(
      `content : ${message.content}  tavasot ${message.author.username} delete shod `
    );
  },
};
