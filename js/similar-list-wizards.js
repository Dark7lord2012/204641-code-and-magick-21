'use strict';

(() => {
  const WIZARD_NAMES = window.setup.WIZARD_NAMES;
  const WIZARD_FAMILIES = window.setup.WIZARD_FAMILIES;
  const COAT_COLORS = window.setup.COAT_COLORS;
  const EYES_COLORS = window.setup.EYES_COLORS;
  let setup = window.setup.setup;
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
})();
