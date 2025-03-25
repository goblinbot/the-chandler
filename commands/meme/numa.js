const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("numa").setDescription("Is it Numa?"),

  async execute(interaction) {
    const numaChance = 0.125;
    const isItNuma = Math.random() < numaChance;
    const reply = isItNuma
      ? "We are at the Threshold of Numa. Numa, shortest season, labyrinth season, when the year loses its way, when Time is a river and Memory a winged bird. In Numa, oddities ripen in the gardens of the Isle - unexpected visitors arrive - memory departs.\n[When Numa ends, all Memories will vanish with it, even persistent ones. One of every nine seasons in Brancrug is Numa, but Numa is the vagabond, Numa has no heralds. Numa might arrive twice in one year - or four years might pass without the touch of its mists.]"
      : "It's not Numa.";

    await interaction.reply(reply);
  },
};
