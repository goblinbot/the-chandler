const {
    SlashCommandBuilder,
    AttachmentBuilder,
    EmbedBuilder,
} = require("discord.js");

const { getWeightedRandomHour } = require("../../utils/hours.utils");
const { getAspectByName } = require("../../utils/aspects.utils");
const { createHourDomainReplyField, createTarotReplyFields, getHourHourString, createAltNameReplyField } = require("../../messageBuilders/hourCards.msg");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hour")
        .setDescription("Draw a card from the Tarot of Hours"),
    async execute(interaction) {

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

        // // Material bonus
        // if (hour.materials) {
        //     additionalFields.push({
        //         name: '',
        //         value: `Associated ${hour.materials.type}: ${hour.materials.name}`
        //     })
        // }

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