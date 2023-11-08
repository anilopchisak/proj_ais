// Ищем клик по всему окну
window.addEventListener('click', function(event){
    // console.log(event.target); // элемент по которому кликнули
    let counter; // Объявляем переменную для счетчика

    // Проверяем клик строго по кнопкам Плюс либо Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Находим див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');

        // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
        if (event.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText;
        }

        // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
        if (event.target.dataset.action === 'minus') {
            // Проверяем чтобы счетчик был больше 1
            if (parseInt(counter.innerText) > 1) {
                // Изменяем текст в счетчике уменьшая его на 1
                counter.innerText = --counter.innerText;
            }
            // Проверка на товар который находится в корзине
            else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
                // Удаляем товар из корзины
                event.target.closest('.cart-item').remove();

                // Отображение статуса корзины Пустая / Полная
                toggleCartStatus();
            }
        }
    }
});

