let cart = [];
let total = 0;

const cartModal = document.getElementById("cartModal");
const cartButton = document.getElementById("cartButton");

// Function to add items to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
    alert(`${name} has been added to your cart!`);
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    // Clear current cart items
    cartItems.innerHTML = "";

    // Add each item to the cart display
    cart.forEach((item, index) => {
        const itemElement = document.createElement("p");
        itemElement.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(itemElement);
    });

    // Update total price
    totalPrice.innerText = `Total: $${total.toFixed(2)}`;
}

// Function to clear cart
function clearCart() {
    cart = [];
    total = 0;
    updateCart();
    alert("Cart has been cleared.");
}

// Function to open modal
cartButton.onclick = function() {
    cartModal.style.display = "flex";
};

// Function to close modal
function closeModal() {
    cartModal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
}

// Contact form submission
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    document.getElementById("contactForm").reset();
};
