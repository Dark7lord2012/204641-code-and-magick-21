'use strict';

(() => {
  const MIN_NAME_LENGTH = window.setup.MIN_NAME_LENGTH;
  const MAX_NAME_LENGTH = window.setup.MAX_NAME_LENGTH;

  let userNameInput = window.setup.userNameInput;
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

})();
