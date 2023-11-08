// // находим Div внутри корзины, в который мы добавляем товары
// const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function(event) {
    if (event.target.closest('[data-itemdelete]'))
    {
        event.target.closest('.cart-item').remove();

        // Отображение статуса корзины Пустая / Полная
        toggleCartStatus();
    }
});