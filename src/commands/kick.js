const kickEmbed = require("../embeds/kickEmbed");
const warn = require("../function/warn");

module.exports = {
  name: "kick",
  description: "kick command ",
  async execute(message, args, client) {
    const adminName = message.author.username;
    const target = message.mentions.users.first().username;

    if (message.member.roles.cache.some((role) => role.name === "kick")) {
      const member = message.mentions.users.first();
      if (member) {
        const memberTarget = message.guild.members.cache.get(member.id);
        memberTarget.kick();
        kickEmbed.kickEmbed(message, client, adminName, target);
      } else {
        message.channel.send("cold not kicked");
      }
    } else {
      await message.delete();
      message.channel.send("you dont have permistion to do this ");
      warn.setWarn(message, client);
    }
  },
};
