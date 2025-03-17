const {
  SlashCommandBuilder,
  ChannelType,
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
    )
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("The channel to echo into")
        // Ensure the user can only select a TextChannel for output
        .addChannelTypes(ChannelType.GuildText)
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
    await interaction.followUp(bold(_shout));
  },
};
