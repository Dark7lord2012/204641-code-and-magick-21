'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_FAMILIES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55`,
  `rgb(0, 0, 0)`
];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

let userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

let similarListElement = userDialog.querySelector(`.setup-similar-list`);

let similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

let generateWizards = (lengthPlayers) => {
  let wizards = [];

  for (let i = 0; i < lengthPlayers; i++) {
    wizards[i] = {
      // Невероятное выражение для рандомного имени
      name:
        (Math.round(Math.random()))
          ?
          `${WIZARD_NAMES[Math.round(Math.random() * (WIZARD_NAMES.length - 1))]}
            ${WIZARD_FAMILIES[Math.round(Math.random() * (WIZARD_FAMILIES.length - 1))]}`
          :
          `${WIZARD_FAMILIES[Math.round(Math.random() * (WIZARD_FAMILIES.length - 1))]}
            ${WIZARD_NAMES[Math.round(Math.random() * (WIZARD_NAMES.length - 1))]}`,
      coatColor: COAT_COLORS[Math.round(Math.random() * (COAT_COLORS.length - 1))],
      eyesColor: EYES_COLORS[Math.round(Math.random() * (EYES_COLORS.length - 1))]
    };
  }

  return wizards;
};

let wizards = generateWizards(4);

let renderWizard = (wizard) => {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

let fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
