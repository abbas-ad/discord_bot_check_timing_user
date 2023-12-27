const Discord = require("discord.js");

module.exports = {
  name: "users",
  description: "this is a ping command!",
  async execute(message, args, client, connections) {
    if (message.member.roles.cache.some((role) => role.name === "checkUsers")) {
    await connections.query(
        "SELECT * FROM users",
        function (error, results, fields) {
          if (error) throw error;
          results.forEach((element) => {
            var embed = new Discord.MessageEmbed()
              .setColor("#800000")
              .addFields(
                {
                  name: "userNames ",
                  value: ` ${element.username} `,
                  inline: true,
                },
                { name: "discord_id ", value: ` ${element.discord_id}`, inline: true },
                {
                  name: "ChannelName ",
                  value: ` ${message.channel.name}`,
                  inline: true,
                }
              )
              .setDescription(` ${element.discord_id}`)
              .setTimestamp();
            client.channels.cache
              .get("1079084737601228830")
              .send({ embeds: [embed] });
          });
          // connected!
        }
      );
    } else {
      await message.delete();
      await message.channel.send("you dont have permition to use this command");
    }
  },
};
