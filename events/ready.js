const { Events } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`WE RISE! The Hour known as ${client.user.tag} has logged in.`);
  },
};
