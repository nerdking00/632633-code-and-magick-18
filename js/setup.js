'use strict';

var WIZARD_NAMES = ['Иван', 'ХуанСебастьян', 'Мария', 'Кристофор', 'Виктор', 'Юлия', 'Лопита', 'Вашингтон'];
var WIZADR_LAST_NAME = ['Да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var randName = Math.floor(Math.random() * WIZARD_NAMES.length);
var randLastname = Math.floor(Math.random() * WIZADR_LAST_NAME.length);
var randCoat = Math.floor(Math.random() * WIZARD_COAT_COLOR.length);
var randEyes = Math.floor(Math.random() * WIZARD_EYES_COLOR.length);

var createCharacter = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    var wizardName = WIZARD_NAMES[randName] + ' ' + WIZADR_LAST_NAME[randLastname];
    var wizardCoat = WIZARD_COAT_COLOR[randCoat];
    var wizardEyes = WIZARD_EYES_COLOR[randEyes];
    wizards.push({
      name: wizardName,
      coat: wizardCoat,
      eyes: wizardEyes
    });
  }
  return wizards;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

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
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

createWizard();

userDialog.querySelector('.setup-similar').classList.remove('hidden');
