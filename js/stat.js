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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

function getMaxElement(arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

function getRandomColor(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

window.renderStatistics = function (ctx, NAMES, times) {
  // ОБЛАЧКА
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0 , 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
  // СООБЩЕНИЕ О ПОБЕДЕ
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);
  ctx.fillText('Список результатов :', TEXT_X, TEXT_Y + (GAP + GAP));
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
    ctx.fillRect(GISTO_X + (TEXT_WIDTH * 2) * i, GISTO_Y + GAP, -BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
  }
};
