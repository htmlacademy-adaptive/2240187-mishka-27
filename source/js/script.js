if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

const menuBtn = document.querySelector('.nav__toggle');
const menuNav = document.querySelector('.nav');

if (menuBtn) {
  menuBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    menuNav.classList.toggle('nav--opened');
  });
}

const modalBtn = document.querySelectorAll('.modal-open');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal__overlay');

if (modal) {
  const openedModal = function () {
    modal.classList.add('modal--opened');
    overlay.classList.add('overlay--opened');
  }

  const closedModal = function () {
    modal.classList.remove('modal--opened');
    overlay.classList.remove('overlay--opened');
  }

  modalBtn.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      openedModal();
    });
  });

  overlay.addEventListener('click', function () {
    const overlayOpen = this.closest('.overlay--opened');
    if (overlayOpen) {
      closedModal();
    }
  });
}
