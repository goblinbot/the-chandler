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
    .setName("single-aspect")
    .setDescription("Vibe check?"),

  async execute(interaction) {
    const _name = weightedRandom(getAspectNameArray(), getAspectWeightArray());
    const _aspect = getAspectByName(_name);
    const _file = new AttachmentBuilder(getAspectIcon(_aspect));

    const _aspectEmbed = new EmbedBuilder()
      .setImage(`attachment://${_aspect.icon}`)
      .addFields({ name: "Principle", value: _aspect.name, inline: true })
      .addFields({ name: "Art", value: _aspect.concept, inline: true })
      .setColor(_aspect.color || 0x777777);

    await interaction.reply({
      content: "Vibe checking ..",
      files: [_file],
      embeds: [_aspectEmbed],
    });
  },
};
