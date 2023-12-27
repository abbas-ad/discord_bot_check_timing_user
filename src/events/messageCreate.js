const Discord = require("discord.js");
const mysql = require("mysql");
const MessageEmbed = require("../embeds/messageEmbed");
const linkBlocker = require("../function/linksBlocker");
const welcomeMessage = require("../function/welcome");
const timePlay = require("../function/timePlay");
const register = require("../function/register");
require("dotenv").config();
let perfix = process.env.perfix;

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

module.exports = {
  name: "messageCreate",
  once: false,
  async execute(message, client) {
    // log the content of message
    console.log(
      `the content : ${message.content} UserTags ${message.author.tag} username ${message.author.username} user ${message.author.user}`
    );

    // * Time play script
    if (message.channelId == "954417546256322620") {
      timePlay.name(message, client, connections);
    } else if (message.channelId == "806572295082344492") {
      // ! @params(clinet, messages) { \\ save the users ingo in db }
      register.register(message, client, connections);
    }

    const d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let leftTime = `${hour}${min}`
    if (message.channelId == "1081977991636189316" && message.content == 'sayTimes') {
      var embed = new Discord.MessageEmbed()
      .setColor("#800000")
      .setDescription(`Times its = ${leftTime} and times length == ${leftTime.length}`)
      .setTimestamp();
      client.channels.cache
      .get("1081977991636189316")
      .send({ embeds: [embed] });
  }
  






    // if type of users was robot dont doing any thing
    if (message.author.bot) return;
    // welcome message
    welcomeMessage.welcome(message, client);
    //check the message if the link delete them and set the log fot it
    linkBlocker.linkBlocker(message, client);
    // set the message log

    // if message contents dont starting with bot cmd and the type of users was robot  dont soing anything
    if (!message.content.startsWith(perfix) || message.author.bot) return;
    // remove the bot cmd and any space
    let args = message.content.slice(perfix.length).split(/ +/);
    // delete the first iteam of array and convert them to lowerCase
    const command = args.shift().toLowerCase();

    switch (command) {
      case "users":
        await client.commands
          .get("users")
          .execute(message, args, client, connections);
        break;
      case "clear":
        await client.commands.get("clear").execute(message, args, client);
        break;
      case "kick":
        await client.commands.get("kick").execute(message, args, client);
        break;
      case "ban":
        await client.commands.get("ban").execute(message, args, client);
        break;
      case "reactionrolle":
        await client.commands
          .get("reactionrolle")
          .execute(message, args, client, Discord);
        break;
    }
  },
};
