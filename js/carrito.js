// js/carrito.js
document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});

function updateCart() {
    const cartElement = document.getElementById('cart');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartElement.innerHTML = '';

    if (cart.length === 0) {
        cartElement.innerHTML = '<p>Tu carrito está vacío</p>';
    } else {
        let total = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.textContent = `${item.name} - $${item.price}`;
            cartElement.appendChild(itemElement);
            total += item.price;
        });

        const totalElement = document.createElement('p');
        totalElement.innerHTML = `<strong>Total: $${total}</strong>`;
        cartElement.appendChild(totalElement);
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCart();
}
