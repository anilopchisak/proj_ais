
function toggleCartStatus () {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('.orderForm');

    // Количество элементов внутри блока cart-wrapper
    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('d-none');
        orderForm.classList.remove('d-none');
    }
    else {
        cartEmptyBadge.classList.remove('d-none');
        orderForm.classList.add('d-none');
    }
}