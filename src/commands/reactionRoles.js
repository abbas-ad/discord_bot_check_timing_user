module.exports = {
  name: "reactionrolle",
  description: "reactionrolle commands",
  async execute(message, args, client, Discord) {
    const MemberRolle = message.guild.roles.cache.find(
      (role) => role.name === "member"
    );
    const reaction = "✅";
    const suggestionEmbed = new Discord.MessageEmbed()
      .setColor("#000000")
      .setTitle("[!] Rules")
      .setTimestamp();
    client.channels.cache
      .get("1027533430004666418")
      .send({ embeds: [suggestionEmbed] })
      .then((sEmbed) => {
        sEmbed.react(reaction);
      });
  },
};
