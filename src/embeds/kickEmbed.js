const Discord = require("discord.js");

function kickEmbed(message, client, adminName, target) {
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
  client.channels.cache.get("1026252128248922292").send({ embeds: [embed] });
}

module.exports = { kickEmbed };
