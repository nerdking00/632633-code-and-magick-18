'use strict';

var WIZARD_NAMES = ['Иван', 'ХуанСебастьян', 'Мария', 'Кристофор', 'Виктор', 'Юлия', 'Лопита', 'Вашингтон'];
var WIZADR_LAST_NAME = ['Да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var COUNTER = 4;

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var createCharacter = function () {
  var wizards = [];
  for (var i = 0; i < COUNTER; i++) {
    wizards.push({
      name: WIZARD_NAMES[getRandom(0, WIZARD_NAMES.length)] + ' ' + WIZADR_LAST_NAME[getRandom(0, WIZADR_LAST_NAME.length)],
      coat: WIZARD_COAT_COLOR[getRandom(0, WIZARD_COAT_COLOR.length)],
      eyes: WIZARD_EYES_COLOR[getRandom(0, WIZARD_EYES_COLOR.length)]
    });
  }
  return wizards;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;
  return wizardElement;
};

var createWizard = function () {
  var wizards = createCharacter();
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

createWizard();
