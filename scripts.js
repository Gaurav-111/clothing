document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const updateCartDisplay = () => {
        const cartItemsContainer = document.getElementById('cartItems');
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';
            cartItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                cartItemsContainer.appendChild(li);
            });
        }
    };

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.dataset.product;
            cartItems.push(product);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCartDisplay();
            alert(`${product} has been added to your cart.`);
        });
    });

    const signInForm = document.getElementById('signInForm');
    if (signInForm) {
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Sign In successful');
            window.location.href = 'index.html';
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login successful');
            window.location.href = 'index.html';
        });
    }

    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Order placed successfully');
            localStorage.removeItem('cartItems');
            window.location.href = 'index.html';
        });
    }

    updateCartDisplay();
});

