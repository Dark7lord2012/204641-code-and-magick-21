'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const COLUMN_GAP = 50;
const FONT_GAP = 15;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = (arr) => {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = (ctx, players, times) => {
  // Белая подложка с тенью
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `white`);

  // Текст с поздравлением
  ctx.fillStyle = `black`;
  ctx.font = `16px "PT Mono"`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText(`Список результатов:`, CLOUD_X + GAP, CLOUD_Y + (2 * GAP) + FONT_GAP);

  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    // Имена игроков
    ctx.fillStyle = `black`;
    ctx.fillText(
        players[i],
        CLOUD_X + (2 * GAP) + ((COLUMN_GAP + BAR_WIDTH) * i),
        CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP
    );

    // Красным столбец Морфиус дал только нам
    if (players[i] === `Вы`) {
      ctx.fillStyle = `red`;
    } else {
      ctx.fillStyle = `hsl(240, ${Math.ceil(Math.random() * 100)}%, 50%)`;
    }

    ctx.fillRect(
        CLOUD_X + (2 * GAP) + ((COLUMN_GAP + BAR_WIDTH) * i),
        CLOUD_Y + 80 + (BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime),
        BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime
    );
    ctx.fillStyle = `black`;
    ctx.fillText(
        Math.ceil(times[i]),
        CLOUD_X + (2 * GAP) + ((COLUMN_GAP + BAR_WIDTH) * i),
        CLOUD_Y + 60 + (BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime)
    );
  }
};
