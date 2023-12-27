const Discord = require("discord.js");

function banEmbed(message, client, adminName, target) {
  var embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setAuthor({
      name: ` ${message.author.username}`,
      iconURL:
        "https://cdn.discordapp.com/avatars/" +
        message.author.id +
        "/" +
        message.author.avatar +
        ".jpeg",
      url:
        "https://cdn.discordapp.com/avatars/" +
        message.author.id +
        "/" +
        message.author.avatar +
        ".jpeg",
    })
    .addFields(
      { name: "adminName ", value: ` ${adminName}`, inline: true },
      { name: "target ", value: ` <@${target}>`, inline: true }
    )
    .setDescription(`Bot: ${message.client.user}`)
    .setTimestamp();
  client.channels.cache.get("1026255850886664244").send({ embeds: [embed] });
}

module.exports = { banEmbed };
