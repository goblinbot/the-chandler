const { SlashCommandBuilder, EmbedBuilder, bold } = require("discord.js");
const { randomFromArray } = require("../../utils/random.utils");
const { WEATHER_ARRAY } = require("../../constants/combinations/weather");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("weather")
        .setDescription("Candleboy predicts the weather weirdly; as he does"),

    async execute(interaction) {
        const _weather = randomFromArray(WEATHER_ARRAY);

        const _embed = new EmbedBuilder()
            .setColor(0x777777)
            .setTitle('Chandler\'s Weather prediction:');

        // Add weather result
        _embed.addFields({
            name: bold(_weather.name),
            value: _weather.description
        });

        // Aspects
        _embed.addFields({
            name: "These are its aspects:",
            value: _weather.aspects.join(", ")
        });

        await interaction.reply({
            embeds: [_embed],
        });
    },
};
