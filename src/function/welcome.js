async function welcome(message, client) {
  const isWelcomeMessage = message.type === "GUILD_MEMBER_JOIN";
  if (isWelcomeMessage) {
    message.author.send("welcome");
    client.channels.cache
      .get("1026433418612973588")
      .send(`welcome <@${message.author.username}>`);
  }
}

module.exports = { welcome };
