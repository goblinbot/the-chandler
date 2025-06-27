const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("numa").setDescription("Is it Numa?"),

  async execute(interaction) {
    const numaChance = 0.005;
    const isItNuma = Math.random() < numaChance;

    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth();

    today.setHours(today.getHours() + 2);
    const ddTz = today.getDate();


    if (mm === 5 && (dd === 28 || ddTz === 28)) {
      await interaction.reply('June 28th, once again. Numa.');
    } else {
      const reply = isItNuma
        ? "We are at the Threshold of Numa. Numa, shortest season, labyrinth season, when the year loses its way, when Time is a river and Memory a winged bird. In Numa, oddities ripen in the gardens of the Isle - unexpected visitors arrive - memory departs. One of every nine seasons in Brancrug is Numa, but Numa is the vagabond, Numa has no heralds. Numa might arrive twice in one year - or four years might pass without the touch of its mists."
        : "It's not Numa.";

      await interaction.reply(reply);
    }
  },
};
