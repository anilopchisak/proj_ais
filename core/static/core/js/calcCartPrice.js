function calcCartPrice() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price_value');
    const totalPriceEl = document.querySelector('.total-price');

    // Общая стоимость товаров
    let totalPrice = 0;

    // Обходим все блоки с ценами в корзине
    priceElements.forEach(function(item) {
        // Находим количество товара
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
        // Добавляем стоимость товара в общую стоимость (кол-во * цену)
        totalPrice += parseFloat(item.innerText) * parseFloat(amountEl.innerText);
        console.log(totalPrice);
    });

    // Отображаем цену на странице
	totalPriceEl.innerText = totalPrice;
}