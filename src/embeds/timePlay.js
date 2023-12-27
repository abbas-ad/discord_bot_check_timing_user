const Discord = require("discord.js");

function timePlayEmbeds(part, message, client) {
  if (message.type === "GUILD_MEMBER_JOIN") {
    return;
  } else {
    var embed = new Discord.MessageEmbed()
      .addFields(
        { name: "Tag ", value: ` ${part}`, inline: true },
      )
      .setDescription(`Bot: ${message.client.user}`)
      .setTimestamp();
    client.channels.cache.get("1068528619749650452").send({ embeds: [embed] });
  }
}

module.exports = { timePlayEmbeds };
