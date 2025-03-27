const { SlashCommandBuilder } = require("discord.js");
const { RANDOM_QUOTES } = require("../../constants/randomQuotes");
const { randomFromArray } = require("../../utils/random.utils");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("quote")
    .setDescription("Esoteric yapping"),

  async execute(interaction) {
    const _quote = randomFromArray(RANDOM_QUOTES);

    await interaction.reply(_quote);
  },
};
