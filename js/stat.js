'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_X = 120;
var TEXT_Y = 35;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var GISTO_X = 160;
var GISTO_Y = 230;
var TEXT_FONT = '16px PT Mono';
var TEXT_BASELINE = 'hanging';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomColor = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var renderText = function (ctx, color, text, x, y) {
  ctx.font = TEXT_FONT;
  ctx.textBaseline = TEXT_BASELINE;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var renderBars = function (ctx, x, y, width, height) {
  ctx.fillRect(x, y, width, height);
};

window.renderStatistics = function (ctx, NAMES, times) {
  // ОБЛАЧКА
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0 , 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  // СООБЩЕНИЕ О ПОБЕДЕ
  renderText(ctx, '#000', 'Ура вы победили!', TEXT_X, TEXT_Y);
  renderText(ctx, '#000', 'Список результатов :', TEXT_X, TEXT_Y + (GAP + GAP));
  // ГИСТОГРАММЫ
  var maxTime = getMaxElement(times);
  for (var i = 0; i < NAMES.length; i++) {
    ctx.fillText(NAMES[i], TEXT_X + (TEXT_WIDTH * 2) * i, BAR_HEIGHT + BAR_HEIGHT - TEXT_WIDTH);
    ctx.fillText(Math.floor(times[i]), TEXT_X + (TEXT_WIDTH * 2) * i, GISTO_Y + GAP - (BAR_HEIGHT * times[i]) / maxTime - FONT_GAP);
    if (NAMES[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'hsl(220, 100%, ' + getRandomColor(10, 80) + '%)';
    }
    renderBars(ctx, GISTO_X + (TEXT_WIDTH * 2) * i, GISTO_Y + GAP, -BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
  }
};
