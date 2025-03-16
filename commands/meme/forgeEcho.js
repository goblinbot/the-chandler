const {
  SlashCommandBuilder,
  ChannelType,
  AttachmentBuilder,
  //   EmbedBuilder,
  bold,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Replies, but as King Crucible")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The input to echo back")
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
    _shout = `# ${_shout.toUpperCase()}`;

    // const channel = interaction.options.get;

    // await interaction.reply(_shout);

    // await channel;
    const file = new AttachmentBuilder("./image/kingCrucible.jpg");
    // const exampleEmbed = new EmbedBuilder()
    //   .setTitle("KING CRUCIBLE:")
    //   .setImage("attachment://kingCrucible.jpg")
    //   .setColor(0xf08d49);
    //   .setDescription(_shout);

    // await interaction.reply({
    //   content: _shout,
    //   files: [file],
    //   embeds: [exampleEmbed],
    // });
    // await interaction.followUp(bold(_shout));

    await interaction.reply({ content: bold(_shout), files: [file] });
  },
};

// message.channel.send("little dog", {files: ["https://i.imgur.com/xxXXXxx.jpeg"] });
