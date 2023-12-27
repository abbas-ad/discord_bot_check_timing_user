const warn = require("../function/warn");

module.exports = {
  name: "clear",
  description: "Clear command ",
  async execute(message, args, client) {
    if (message.member.roles.cache.some((role) => role.name === "clear")) {
      if (!args[0])
        return message.reply(
          "Tedad Payam hai ke bayad pak shavan ra vared konid"
        );
      if (isNaN(args[0]))
        return message.reply("Baraye delete shodan bayad adad vared shavad");

      if (args[0] > 100)
        return message.reply("beshtar 100 message ra nmetavan delete kard");
      if (args[0] < 1)
        return message.reply(
          "Baraye delete kardan bayad adad vared shodeh 1 be bala bashad"
        );

      await message.channel.messages
        .fetch({ limit: args[0] })
        .then((messages) => {
          message.channel.bulkDelete(messages);
        });
    } else {
      await message.delete();
      await message.channel.send(
        `you dont have permition to use this command <@${message.author.id}> You got a warning Be careful`
      );
      warn.setWarn(message, client);
    }
  },
};
