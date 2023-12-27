const fs = require("fs");

async function register(message, client, connections) {
  if (message.type === "GUILD_MEMBER_JOIN") return;
  if (message.author.bot) return;

 await connections.query(
    `INSERT INTO users (username, tag, discord_profile, discord_id) VALUES ('@${message.author.username}','${message.author.tag}','https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.jpeg','${message.author.id}')`,
    (error, results, fields) => {
      console.log(results);
      if (error) {
        try {
          fs.mkdirSync("errors");
          console.log(`the folder errors was created`);
        } catch (err) {
          err.code == "EEXIST"
            ? console.log("The dir named is exist")
            : console.log(err);
        }
        try {
          fs.writeFile(
            `./errors/errors.txt`,
            JSON.stringify(error),
            function (err) {
              console.log("Data written successfully!");
              console.log("Let's read newly written data");
            }
          );
        } catch (error) {
          console.log(error);
        }
      }
      if (
        message.member.roles.cache.some((role) => role.name === "mustRigester")
      ) {
        message.guild.members.cache.forEach((member) => {
          member.roles.remove("1078608478274334771");
        });
      }
    }
  );
}

module.exports = { register };
