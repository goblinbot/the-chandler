const {
  SlashCommandBuilder,
  AttachmentBuilder,
  EmbedBuilder,
} = require("discord.js");
const {
  getAspectIcon,
  getAspectNameArray,
  getAspectWeightArray,
  getAspectByName,
} = require("../../utils/aspects.utils");
const { weightedRandom } = require("../../utils/random.utils");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("aspects")
    .setDescription("Vibe check?"),

  async execute(interaction) {
    const _randomAspectName = weightedRandom(
      getAspectNameArray(),
      getAspectWeightArray()
    );
    const _aspect = getAspectByName(_randomAspectName);
    const _file = new AttachmentBuilder(getAspectIcon(_aspect));

    console.log(_aspect);

    const _aspectEmbed = new EmbedBuilder()
      .setImage(`attachment://${_aspect.icon}`)
      .addFields({ name: "Principle", value: _aspect.name, inline: true })
      .addFields({ name: "Art", value: _aspect.concept, inline: true })
      //   .addFields({ name: "Test 3", value: "Maybe", inline: true })
      .setColor(_aspect.color || 0x777777);

    await interaction.reply({
      content: "Vibe checking ..",
      files: [_file],
      embeds: [_aspectEmbed],
    });

    // await interaction.reply({ content: bold(_shout), files: [file] });
  },
};
