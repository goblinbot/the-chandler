const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
const { initClientCommands } = require("./utils/commands");
const { initClientEvents } = require("./utils/events");

const path = require("node:path");
global.appRoot = path.resolve(__dirname);

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Add Commands, Events to Client
client.commands = initClientCommands();
initClientEvents(client);

client.login(token);
