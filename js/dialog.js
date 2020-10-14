'use strict';
(() => {
  let setup = window.setup.setup;
  let userNameInput = window.setup.userNameInput;
  let setupOpen = document.querySelector(`.setup-open`);
  let setupClose = setup.querySelector(`.setup-close`);

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

  // Перемещение перетаскиванием
  let dialogHandle = setup.querySelector(`.upload`);

  dialogHandle.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();
  });
})();
