const { REPLY_CANVAS } = require("../constants/canvas");

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
  calculateCanvasCoords,
};
