const fs = require("node:fs");
const path = require("node:path");
const { Collection } = require("discord.js");

const initClientCommands = () => {
  const foldersPath = path.join(appRoot, "commands");

  const commandFolders = fs.readdirSync(foldersPath);

  const _commands = new Collection();

  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);
      // Set a new item in the Collection with the key as the command name and the value as the exported module
      if ("data" in command && "execute" in command) {
        _commands.set(command.data.name, command);
      } else {
        console.log(
          `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
        );
      }
    }
  }

  return _commands;
};

module.exports = { initClientCommands };
