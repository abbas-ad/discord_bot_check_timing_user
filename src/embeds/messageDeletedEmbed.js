const Discord = require("discord.js");

function MessageDeletedEmbed(message, client) {
  var embed = new Discord.MessageEmbed()
    .setColor("#800000")
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
        name: "Content ",
        value: ` '${message.content}' --Tavasot`,
        inline: false,
      },
      { name: "by ", value: ` <@${message.author.id}>`, inline: true },
      {
        name: "ChannelName ",
        value: `Dar channel ${message.channel.name}  delet shod`,
        inline: true,
      }
    )
    .setDescription(
      `Deleted 
    Bot: ${message.client.user}`
    )
    .setTimestamp();
  client.channels.cache.get("1068546958500831272").send({ embeds: [embed] });
}

module.exports = { MessageDeletedEmbed };
