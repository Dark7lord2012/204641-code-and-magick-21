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
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

const wizardCoat = document.querySelector(`.setup-wizard .wizard-coat`);
const wizardEyes = document.querySelector(`.setup-wizard .wizard-eyes`);
const wizardFireball = document.querySelector(`.setup-fireball-wrap`);
const wizardCoatInput = document.querySelector(`.setup-player input[name="coat-color"]`);
const wizardEyesInput = document.querySelector(`.setup-player input[name="eyes-color"]`);
const wizardFireballInput = document.querySelector(`.setup-player input[name="eyes-color"]`);

// Открытие, закрытие нaстроек игрока

let setupOpen = document.querySelector(`.setup-open`);
let setup = document.querySelector(`.setup`);
let setupClose = setup.querySelector(`.setup-close`);
let userNameInput = document.querySelector(`.setup-user-name`);

const onPopupEscPress = (evt) => {
  if (evt.key === `Escape` && evt.target !== userNameInput) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = () => {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = () => {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

// Валидация имени

userNameInput.addEventListener(`input`, () => {
  let valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + ` симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` симв.`);
  } else {
    userNameInput.setCustomValidity(``);
  }

  userNameInput.reportValidity();
});

// Смена мантии, глаз, огнешара

wizardCoat.addEventListener(`click`, () => {
  const color = `${COAT_COLORS[Math.round(Math.random() * (COAT_COLORS.length - 1))]}`;
  wizardCoat.style.fill = color;
  wizardCoatInput.value = color;
});

wizardEyes.addEventListener(`click`, () => {
  const color = `${EYES_COLORS[Math.round(Math.random() * (EYES_COLORS.length - 1))]}`;
  wizardEyes.style.fill = color;
  wizardEyesInput.value = color;
});

wizardFireball.addEventListener(`click`, () => {
  const color = `${FIREBALL_COLORS[Math.round(Math.random() * (FIREBALL_COLORS.length - 1))]}`;
  wizardFireball.style.backgroundColor = color;
  wizardFireballInput.value = color;
});

// Статистика в виде диаграммы

let similarListElement = setup.querySelector(`.setup-similar-list`);

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

setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
