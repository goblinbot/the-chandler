const {
    SlashCommandBuilder,
    AttachmentBuilder,
    EmbedBuilder,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hour")
        .setDescription("Draw a card from the Tarot of Hours"),
    async execute(interaction) {

        await interaction.reply({
            content: 'Test :)'
        });

    }
}