'use strict';

(() => {
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


  let setup = document.querySelector(`.setup`);
  let userNameInput = document.querySelector(`.setup-user-name`);

  window.setup = {
    WIZARD_NAMES,
    WIZARD_FAMILIES,
    MIN_NAME_LENGTH,
    MAX_NAME_LENGTH,
    COAT_COLORS,
    EYES_COLORS,
    FIREBALL_COLORS,
    setup,
    userNameInput,
    wizardCoat,
    wizardEyes,
    wizardFireball,
    wizardCoatInput,
    wizardEyesInput,
    wizardFireballInput
  };
})();

