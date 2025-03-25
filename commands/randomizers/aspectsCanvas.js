const {
  SlashCommandBuilder,
  AttachmentBuilder,
  EmbedBuilder,
} = require("discord.js");
const {
  getAspectIcon,
  getRandomizedAspectsForUser,
} = require("../../utils/aspects.utils");
const Canvas = require("@napi-rs/canvas");
const { createReplyFieldIfArtsMatch } = require("../../utils/arts.utils");
const { REPLY_CANVAS } = require("../../constants/canvas");
const {
  createAspectHeaderFields,
  calculateCanvasCoords,
} = require("../../utils/messagebuilder.utils");
const { createHoursResultReplyField } = require("../../utils/hours.utils");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("aspects")
    .setDescription("Request an occult vibecheck"),

  async execute(interaction) {
    // First, get them Aspects!
    const aspects = await getRandomizedAspectsForUser(3);
    const canvas = await Canvas.createCanvas(
      REPLY_CANVAS.width,
      REPLY_CANVAS.height
    );
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      `${appRoot}${REPLY_CANVAS.backgroundImage}`
    );
    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    for (let i = 0; i < aspects.length; i++) {
      const _img = await Canvas.loadImage(getAspectIcon(aspects[i]));
      const { offsetX, offsetY, size } = calculateCanvasCoords(
        aspects.length,
        i
      );

      context.drawImage(_img, offsetX, offsetY, size, size);
    }

    // Use the helpful Attachment class structure to process the file for you
    const attachment = new AttachmentBuilder(await canvas.encode("png"), {
      name: "combinedAspects.png",
    });

    // Create initial embed & aspect header fields
    const _aspectEmbed = new EmbedBuilder()
      .setImage(`attachment://combinedAspects.png`)
      .setColor(aspects[0].color || 0x777777)
      .addFields(createAspectHeaderFields(aspects));

    // Add "matching arts" if major/minor are of the same arts
    const _artsField = createReplyFieldIfArtsMatch(
      aspects[0].name,
      aspects[1].name
    );
    if (_artsField) {
      _aspectEmbed.addFields(_artsField);
    }

    // Time to call a Lantern Adept about potential Hours
    const _hourField = createHoursResultReplyField(aspects);
    if (_hourField) {
      _aspectEmbed.addFields(_hourField);
    } else {
      _aspectEmbed.addFields({
        name: "Your aspects did not draw the attention of a specific hour.",
        value: "Maybe that's for the best. If you're an Obliviate, well done!",
      });
    }

    // Weather?

    await interaction.reply({
      // content: "Vibe checking ..",
      files: [attachment],
      embeds: [_aspectEmbed],
    });
  },
};
