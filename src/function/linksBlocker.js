const linkBlockerEmbed = require('../embeds/linkBlockerEmbed');

async function linkBlocker(message, clinet) {
  if (!message.member.roles.cache.some((role) => role.name === "sendLinkMessage")) {
    if (message.content.includes("discord.gg/")) {
      message.delete();
      linkBlockerEmbed.linkBlockerEmbed(message, clinet)
    } else if (message.content.includes("discordapp.com/")) {
      message.delete();
      linkBlockerEmbed.linkBlockerEmbed(message, clinet)
    } else if (message.content.includes("https:")) {
      message.delete();
      linkBlockerEmbed.linkBlockerEmbed(message, clinet)
    } else if (message.content.includes("http:")) {
      message.delete();
      linkBlockerEmbed.linkBlockerEmbed(message, clinet)
    } else if (message.content.includes("www.")) {
      message.delete();
      linkBlockerEmbed.linkBlockerEmbed(message, clinet)
    }
  }
}

module.exports = { linkBlocker };
