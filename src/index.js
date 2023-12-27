const Discord = require("discord.js");
const { Client, MessageActionRow } = require("discord.js");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"], partials:["MESSAGE", "CHANNEL", "REACTION"] });
const fs = require("fs");

require("dotenv").config();

// command handler
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./src/commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// event handler
const eventFiles = fs
  .readdirSync("./src/events")
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

// client.login(process.env.Discord_token);
client.login('MTA4MTk1ODA2NDY0ODg4MDEzOQ.G9fXoZ.0bt4z7ItHB3W5z1UsY3ynFFvYj7om5TG0NTIgE');
// client.login("OTMxODg3OTE2MTczNjQzNzg4.G7xM-9.s076fhPlPQdUTqsY7isryNq9tCRrPko5xu-QUs");
