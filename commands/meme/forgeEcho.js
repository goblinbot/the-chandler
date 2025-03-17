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
    .setDescription("Replies, but IN THE RAW TONGUE OF KING CRUCIBLE")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("MAJESTIC WORDS")
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

    // const channel = interaction.options.get;

    // await interaction.reply(_shout);
    const file = new AttachmentBuilder(`${appRoot}/image/kingCrucible.jpg`);
    // const file2 = new AttachmentBuilder(
    //   `${appRoot}/image/powers/aspectKnock.png`
    // );

    const exampleEmbed = new EmbedBuilder()
      .setImage("attachment://kingCrucible.jpg")
      //   .setImage("attachment://aspectKnock.png")
      .setDescription(_shout)

      //   .addFields({ name: "Test 1", value: "Yes yes?", inline: true })
      //   .addFields({ name: "Test 2", value: "Yes?", inline: true })
      //   .addFields({ name: "Test 3", value: "Maybe", inline: true })
      .setColor(0xf08d49);

    await interaction.reply({
      content: _shout,
      files: [file],
      embeds: [exampleEmbed],
    });
    // await interaction.followUp(bold(_shout));

    // await interaction.reply({ content: bold(_shout), files: [file] });
  },
};

// message.channel.send("little dog", {files: ["https://i.imgur.com/xxXXXxx.jpeg"] });
