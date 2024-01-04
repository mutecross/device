const modalDelivery = document.querySelector('.modal-delivery');
const buttonsOpen = document.querySelectorAll('.open-modal');
const buttonClose = document.querySelector('.modal-delivery__close');


const onButtonOpenClick = function () {
  modalDelivery.showModal();
}

const onButtonCloseClick = function () {
  modalDelivery.close();
}

if (modalDelivery) {
  buttonsOpen.forEach(button => {
    button.addEventListener('click', onButtonOpenClick);
  })

  buttonClose.addEventListener('click', onButtonCloseClick)

  modalDelivery.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
      event.currentTarget.close();
    }
  })
}
