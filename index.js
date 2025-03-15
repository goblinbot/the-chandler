const { Client, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
const { initClientCommands } = require("./utils/commands");

const path = require("node:path");
global.appRoot = path.resolve(__dirname);

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Add to client intance
client.commands = initClientCommands();

// make debug a node env?
const _debug = true;

if (_debug) {
  // When the client is ready, run this code (only once)
  client.once(Events.ClientReady, (readyClient) => {
    console.log(`WE RISE! Logged in as ${readyClient.user.tag}`);
  });

  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.error(
        `No command matching ${interaction.commandName} was found.`
      );
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "There was an error while executing this command!",
          flags: MessageFlags.Ephemeral,
        });
      } else {
        await interaction.reply({
          content: "There was an error while executing this command!",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
  });
}

client.login(token);
