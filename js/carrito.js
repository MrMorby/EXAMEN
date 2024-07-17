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

document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("confirmModal");
    const btn = document.getElementById("clear-cart-btn");
    const span = document.getElementsByClassName("close")[0];
    const confirmBtn = document.getElementById("confirm-clear");
    const cancelBtn = document.getElementById("cancel-clear");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    cancelBtn.onclick = function() {
        modal.style.display = "none";
    }

    confirmBtn.onclick = function() {
        clearCart();
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function clearCart() {
    localStorage.removeItem('cart');
    updateCart();
}
