let popup = ""; 

function addToCart(courseTitle, coursePrice) {
    const cartItems = document.getElementById('cartItems');
    if (cartItems) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h4>${courseTitle}</h4>
            <p>${coursePrice}</p>
        `;
        cartItems.appendChild(cartItem);
    } else {
        console.error("Cart element not found");
    }
}

document.querySelectorAll('.cartadd-to').forEach(button => {
    button.addEventListener('click', function() {
        addToCart('CSS (Cascading Style Sheets)', '&#8377;500');
        window.location.href = 'cart.html'; 
    });
});

