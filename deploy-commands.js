const { REST, Routes } = require("discord.js");
/* guildId, */
const { guildId, clientId, token } = require("./config.json");
const fs = require("node:fs");
const path = require("node:path");

const commands = [];
const TEST_COMMANDS = [
  'weather'
];
// Grab all the command folders from the commands directory you created earlier

const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);

  // Check if Exists AND isDirectory.
  if (fs.existsSync(commandsPath) && fs.lstatSync(commandsPath).isDirectory()) {
    // Grab all the command files from the commands directory
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".js"));
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);
      if ("data" in command && "execute" in command) {
        commands.push(command.data.toJSON());
      } else {
        console.log(
          `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
        );
      }
    }
  }
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );

    const _guildCommands = commands.filter((c) => TEST_COMMANDS.includes(c.name));
    const _globalCommands = commands.filter((c) => !TEST_COMMANDS.includes(c.name));

    let _guildData;
    let _globalData;

    if (_guildCommands && _guildCommands.length > 0) {
      // The put method is used to fully refresh all commands in the guild with the current set
      _guildData = await rest.put(
        Routes.applicationGuildCommands(clientId, guildId),
        { body: _guildCommands }
      );
    }

    // Put method to fully refresh commands (global) instead of guild
    _globalData = await rest.put(Routes.applicationCommands(clientId), {
      body: _globalCommands,
    });

    console.log(
      `Successfully reloaded ${_guildData.length + _globalData.length || 0} application (/) commands; Guild: ${_guildData.length || 0}, Global: ${_globalData.length || 0}`
    );
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
