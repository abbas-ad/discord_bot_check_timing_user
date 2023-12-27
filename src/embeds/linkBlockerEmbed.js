const Discord = require("discord.js");

function linkBlockerEmbed(message, client) {
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
      {
        name: "Reason ",
        value: `sending the ${message.content} links`,
        inline: false,
      },
      { name: "Tag ", value: ` ${message.author.tag}`, inline: true },
      { name: "user ", value: ` <@${message.author.id}>`, inline: true },
      { name: "userName ", value: ` ${message.author.username}`, inline: true },
      { name: "ChannelName ", value: ` ${message.channel.name}`, inline: true }
    )
    .setDescription(`Bot: ${message.client.user}`)
    .setTimestamp();
  client.channels.cache.get("1025054176293699725").send({ embeds: [embed] });
}

module.exports = { linkBlockerEmbed };