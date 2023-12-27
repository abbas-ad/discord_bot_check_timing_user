const banEmbed = require("../embeds/banEmbed");
const warn = require("../function/warn");

module.exports = {
  name: "ban",
  description: "ban command ",
  async execute(message, args, client) {
    const adminName = message.author.username;
    const target = message.mentions.users.first().username;

    if (message.member.roles.cache.some((role) => role.name === "ban")) {
      const member = message.mentions.users.first();
      if (member) {
        const memberTarget = message.guild.members.cache.get(member.id);
        memberTarget.ban();
        banEmbed.banEmbed(message, client, adminName, target);
      } else {
        message.channel.send("cold not ban");
      }
    } else {
      await message.delete();
      message.channel.send("you dont have permistion to do this ");
      warn.setWarn(message, client);
    }
  },
};