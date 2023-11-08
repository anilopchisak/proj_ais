
// находим Div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper');
// Находим модальное окно
const modalCart = document.querySelector('.modal');

// Отслеживаем клик на странице
window.addEventListener('click', function(event) {
    // Проверяем что клик был совершен по кнопке "add to cart"
    if (event.target.hasAttribute('data-cart')) {

        // Находим карточку с товаром, внутри которой был совершен клик
        const card = event.target.closest('.col-product');

        // Собираем данные с этого товара и записываем их в единый объект productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.image-real').getAttribute('src'),
            title: card.querySelector('.product-name').innerText,
            counter: card.querySelector('[data-counter]').innerText,
            price: card.querySelector('.price_value').innerText,
        };

        // Проверка есть ли уже такой товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id = "${productInfo.id}"]`); // <=> [data-id="'+productInfo.id+'"]

        //Если товар есть в корзине
        if (itemInCart) {
            modalCart.style.visibility = 'visible';

            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);

            modalCart.style.visibility = 'hidden';
        }
        // Если товара нет в корзине
        else {
            // Собранные данные подставим в шаблон для товаров в корзине
            const cartItemHTML = `
                <div class="cart-item" data-id="${productInfo.id}">
                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                    <div class="cart-item__desc">
                        <div class="cart-item__title">${productInfo.title}</div>
                        <div class="price">
                            <div class="counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>
                            <p class="price_value">${productInfo.price}</p>
                        </div>
                    </div>
                    <button class="cart-item__delete" data-itemdelete>&#10006;</button>
                </div> 
            `;

            // Отобразим товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        // Сбрасываем счетчик добавленного товара на "1"
		card.querySelector('[data-counter]').innerText = '1';

        // Отображение статуса корзины Пустая / Полная
        toggleCartStatus();
    }


});