const {
    SlashCommandBuilder,
    AttachmentBuilder,
    EmbedBuilder,
} = require("discord.js");

const { getWeightedRandomHour } = require("../../utils/hours.utils");
const { getAspectByName } = require("../../utils/aspects.utils");
const { createHourDomainReplyField, createTarotReplyFields, getHourHourString, createAltNameReplyField } = require("../../messageBuilders/hourCards.msg");
// const { THE_HOURS } = require("../../constants/hours/_combined");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hour")
        // .addStringOption((option) => option.setName('number').setDescription('of the hour'))
        .setDescription("Draw a card from the Tarot of Hours"),
    async execute(interaction) {

        // const hour = interaction.options.getString('number') ? THE_HOURS[interaction.options.getString('number')] : getWeightedRandomHour();
        const hour = getWeightedRandomHour();
        const { color } = getAspectByName(hour.primaryAspect);
        const _embed = new EmbedBuilder()
            .setColor(color)
            .setTitle(`Your Hour is: ${hour.name}`);


        const file = new AttachmentBuilder(`${appRoot}/image/hours/${hour.image}`);
        _embed.setImage(`attachment://${hour.image}`);

        const additionalFields = [];

        // Altnames & Domains
        additionalFields.push(createAltNameReplyField(hour));
        additionalFields.push(createHourDomainReplyField(hour));

        // alt name, Hour & description
        additionalFields.push({
            name: getHourHourString(hour),
            value: `${hour.description}`,
        });

        // Tarot
        additionalFields.push(createTarotReplyFields(hour));

        // Remove null/undefined, then .map:
        additionalFields
            .filter((n) => n)
            .map((msg) => {
                if (msg) _embed.addFields(msg);
            });

        await interaction.reply({
            files: [file],
            embeds: [_embed],
        });
    }
}