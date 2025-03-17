const {
  SlashCommandBuilder,
  AttachmentBuilder,
  EmbedBuilder,
  bold,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("loudly")
    .setDescription(
      "TOGETHER WE WILL COMMEMORATE THE TONGUE OF THE UNBURNT GOD."
    )
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("WORDS TO BE SPOKEN LOUDLY")
        .setRequired(true)
        .setMaxLength(5_00)
    ),
  async execute(interaction) {
    let _shout = interaction.options.getString("input");
    _shout = bold(`# ${_shout.toUpperCase()}`);

    const file = new AttachmentBuilder(`${appRoot}/image/kingCrucible.jpg`);
    const exampleEmbed = new EmbedBuilder()
      .setImage("attachment://kingCrucible.jpg")
      .setDescription(_shout)
      .setColor(0xf08d49);

    await interaction.reply({
      //   content: _shout,
      files: [file],
      embeds: [exampleEmbed],
    });
    // await interaction.followUp("King Crucible has spoken!");
  },
};
