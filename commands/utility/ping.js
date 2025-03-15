// example file as per https://discordjs.guide/creating-your-bot/slash-commands.html#individual-command-files

const { SlashCommandBuilder } = require("discord.js");

const _lore =
  "Numa, shortest season, labyrinth season, when the year loses its way, when Time is a river and Memory a winged bird. In Numa, oddities ripen in the gardens of the Isle - unexpected visitors arrive - memory departs.";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with .. lore?"),
  async execute(interaction) {
    await interaction.reply(_lore);
  },
};
