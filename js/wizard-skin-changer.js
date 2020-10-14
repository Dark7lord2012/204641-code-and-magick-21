'use strict';

(() => {
  const COAT_COLORS = window.setup.COAT_COLORS;
  const EYES_COLORS = window.setup.EYES_COLORS;
  const FIREBALL_COLORS = window.setup.FIREBALL_COLORS;
  let wizardCoat = window.setup.wizardCoat;
  let wizardEyes = window.setup.wizardEyes;
  let wizardFireball = window.setup.wizardFireball;
  let wizardCoatInput = window.setup.wizardCoatInput;
  let wizardEyesInput = window.setup.wizardEyesInput;
  let wizardFireballInput = window.setup.wizardFireballInput;

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
})();
