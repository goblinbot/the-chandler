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
const { REPLY_CANVAS } = require("../../constants/canvas");
const { calculateCanvasCoords } = require("../../utils/messagebuilder.utils");
const { createHoursReplyFields } = require("../../messageBuilders/hours.msg");
const { createOptionalArtsField } = require("../../messageBuilders/arts.msg");
const { checkIfNuma } = require("../../utils/numa.utils");
const {
  createNumaIntro,
  createNumaAction,
  createNumaEmotionField,
} = require("../../messageBuilders/numa.msg");
const { createEmotionField } = require("../../messageBuilders/misc.msg");
const {
  createAspectHeaderFields,
  createAspectReplyFields,
} = require("../../messageBuilders/aspects.msg");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("aspects")
    .setDescription("Request an occult vibecheck"),

  async execute(interaction) {

    try {
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
        .setTitle("Your aspects are:");

      const additionalFields = [];

      const _numa = checkIfNuma(aspects);

      // Rare chance; Numa overrules regular responses.
      if (_numa) {
        _aspectEmbed.setTitle("Numa.");
        _aspectEmbed.setThumbnail('https://static.wikia.nocookie.net/book-of-hours/images/b/be/Season-Numa.png');
        additionalFields.push(createAspectHeaderFields(aspects));
        additionalFields.push(createNumaIntro());
        additionalFields.push(createNumaAction());
        additionalFields.push(createNumaEmotionField());
      } else {
        // Normal non-Numa response.
        createAspectReplyFields(aspects).forEach((f) => additionalFields.push(f));
        additionalFields.push(createHoursReplyFields(aspects));
        additionalFields.push(createEmotionField());
      }

      // Weather?

      // Remove null/undefined, then .map:
      additionalFields
        .filter((n) => n)
        .map((msg) => {
          if (msg) _aspectEmbed.addFields(msg);
        });

      const _optionalFooter = createOptionalArtsField(aspects);
      if (_optionalFooter) {
        _aspectEmbed.setFooter({
          text: `${_optionalFooter.name}\n${_optionalFooter.value}`,
        });
      }

      await interaction.reply({
        // content: "Vibe checking ..",
        files: [attachment],
        embeds: [_aspectEmbed],
      });

    } catch (err) {
      console.error(err);
    }

  },
};
