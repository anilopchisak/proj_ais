const modalController = ({modal, btnOpen,btnClose, time = 200}) => {
    const btnCart = document.querySelector(btnOpen);
    const modalCart = document.querySelector(modal);

    modalCart.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
`;

//  обработчик события, принимает event (на какой элемент кликнули)
    const closeModal = event => {
        // target - ссылка на объект, который был инициатором события
        const target = event.target;

        if (target === modalCart ||
            (btnClose && target.closest(btnClose)) ||
            event.code ==='Escape') {

            modalCart.style.opacity = 0;

            setTimeout(() => {
                modalCart.style.visibility = 'hidden';
            }, time);
            window.removeEventListener('keydown', closeModal);
        }
    }

    const openModal = () => {
        modalCart.style.visibility = 'visible';
        modalCart.style.opacity = 1;
        window.addEventListener('keydown', closeModal);
    };

    btnCart.addEventListener('click', openModal);
    modalCart.addEventListener('click', closeModal);
}

modalController({
    modal: '.modal',
    btnOpen: '.cart',
    btnClose: '.modal__close',
    time: 100
});