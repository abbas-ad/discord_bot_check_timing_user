const Discord = require("discord.js");

function MessageEmbed(message, client) {
  if (message.type === "GUILD_MEMBER_JOIN") {
    return;
  } else {
    var embed = new Discord.MessageEmbed()
      .setColor("#008000")
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
        { name: "Content ", value: ` ${message.content} `, inline: false },
        { name: "Tag ", value: ` ${message.author.tag}`, inline: true },
        {
          name: "ChannelName ",
          value: ` ${message.channel.name}`,
          inline: true,
        }
      )
      .setDescription(`Bot: ${message.client.user}`)
      .setTimestamp();
    client.channels.cache.get("1068528619749650452").send({ embeds: [embed] });
  }
}

module.exports = { MessageEmbed };
