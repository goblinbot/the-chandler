const { REPLY_CANVAS } = require("../constants/canvas");

const createAspectHeaderFields = (aspects) => {
  const _replyFields = [
    { name: "Major aspect:", value: aspects[0].name, inline: true },
    {
      name: "Minor aspect:",
      value: aspects[1].name,
      inline: true,
    },
  ];

  if (aspects.length > 2) {
    for (let i = 2; i < aspects.length; i++) {
      _replyFields.push({
        name: "Stains of..",
        value: aspects[i].name,
        inline: true,
      });
    }
  }

  return _replyFields;
};

const calculateCanvasCoords = (aspectTotal, i) => {
  const { baseX, size, offsetY } = REPLY_CANVAS;
  let offsetX = baseX;

  if (aspectTotal > 2) {
    offsetX = baseX + i * size + i * baseX;
  } else {
    const minStep = baseX + size * 0.3;
    offsetX = minStep + minStep * i + i * size + i * baseX;
  }

  return { offsetX, offsetY, size };
};

module.exports = {
  createAspectHeaderFields,
  calculateCanvasCoords,
};
