'use strict';

let setup = document.querySelector(`.setup`);
setup.classList.remove(`hidden`);

const names = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const families = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const colors = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55`,
  `rgb(0, 0, 0)`
];
const eyesColors = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];

const generatePlayers = (length) => {
  let players = [];

  for (let i = 0; i < length; i++) {
    players[i] = {
      name: names[Math.ceil(Math.random() * (names.length) - 1)],
      family: families[Math.ceil(Math.random() * (families.length - 1))],
      color: colors[Math.ceil(Math.random() * (colors.length) - 1)],
      eyesColor: eyesColors[Math.ceil(Math.random() * (eyesColors.length) - 1)]
    };
    console.log(players[i].name + ' ' + players[i].family + ' ' + players[i].color + ' ' + players[i].eyesColor);
  }

  return players;
};

generatePlayers(8);
