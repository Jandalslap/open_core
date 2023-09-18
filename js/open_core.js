/* Javascript for Open Core Website */


// Hide the loading screen when the page is fully loaded
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(function() {
      loadingScreen.style.display = 'none';
	}, 2000); // 2000 milliseconds = 3 seconds
});


// Function to update the hidden cart items field
function updateCartItemsHidden() {
	const cartItems = document.querySelectorAll('.cart-item');
	const cartItemsData = [];

	cartItems.forEach(item => {
		cartItemsData.push(item.textContent.trim());
});

const cartItemsHidden = document.getElementById('cart-items-hidden');
cartItemsHidden.value = cartItemsData.join(';   ');
}

// Checkout listener and order form validation
document.getElementById('checkout').addEventListener('click', function(event) {
	// Prevent the default form submission behavior
	event.preventDefault();
	
	const cartItems = document.querySelectorAll('.cart-item');
	if (cartItems.length === 0) {
		alert('Your cart is empty. Please add items to your cart before checking out.');
		return;
	}

	// Check if the first form is filled out
	const firstName = document.getElementById('FName').value;
	const lastName = document.getElementById('LName').value;
	const email = document.getElementById('Email').value;
	const address = document.getElementById('Address').value;
	const mobile = document.getElementById('Mobile').value;
	
	if (!firstName || !lastName || !email || !address || !mobile) {
		alert('Please fill out all required fields in the order form.');
		return;
	}

	// Check phone number length (minimum 7 digits)
	if (mobile.length < 7) {
	alert('Phone number should be at least 7 digits.');
	return;
	}

	// Check email syntax
	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if (!email.match(emailPattern)) {
		alert('Please enter a valid email address.');
		return;
	}

	// Hide the cart container after checkout
	cartItemsContainer.style.display = 'none';

	// If the cart is not empty and the first form is filled in correctly, trigger the hidden submit button in the first form
	document.getElementById('hidden-submit').click();
	
	// Hide the checkout and clear cart buttons after checkout
	document.getElementById('checkout').style.display = 'none';
	document.getElementById('clear-cart').style.display = 'none';

	// Hide the cart heading
	const cartHeading = document.getElementById('cart-heading');
	cartHeading.style.display = 'none';
	
});

// JavaScript code for adding items to the cart
const addToCartButton = document.getElementById('add-to-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const clearCartButton = document.getElementById('clear-cart');
const resetFormButton = document.getElementById('reset-form');
const checkoutButton = document.getElementById('checkout');

addToCartButton.addEventListener('click', function(event) {
	event.preventDefault();

	// Get selected product details (model, colour, quantity)
	const selectedModel = document.querySelector('#model').value;
	const selectedColour = document.querySelector('#colour').value;
	const selectedQuantity = document.querySelector('#quantity').value;

	// Create a new cart item element
	const cartItem = document.createElement('div');
	cartItem.classList.add('cart-item');
	cartItem.innerHTML = `
		<p>${selectedModel} - ${selectedColour} ${selectedQuantity}</p>
	`;

	// Append cart item to the cart items container
	cartItemsContainer.appendChild(cartItem);
	
	// Update the hidden cart items field after adding items to the cart
	updateCartItemsHidden();

	// Show the checkout and clear cart buttons
	checkoutButton.style.display = 'block';
	clearCartButton.style.display = 'block';
	resetFormButton.style.display = 'block';
	
});
	
// Clear the cart function
function clearCart() {
	const cartItems = document.querySelectorAll('.cart-item');
	cartItems.forEach(item => {
		item.remove();
	});
}

// Event listener for clear cart button
clearCartButton.addEventListener('click', function(event) {
	event.preventDefault();

	// Clear cart items
	cartItemsContainer.innerHTML = '';
	
	clearCart();	

});	

// Refresh form listener that reloads page
document.getElementById('reset-form').addEventListener('click', function() {
	location.reload();
});





