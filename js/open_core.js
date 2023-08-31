
/* Javascript for Open Core Website */

/* Allow only alphabet letters in form First Name fields */
const FName = document.getElementById('FName');

FName.addEventListener('input', function() {
const inputValue = FName.value;
const onlyLetters = inputValue.replace(/[^A-Za-z]/g, '');
FName.value = onlyLetters;
});

/* Allow only alphabet letters in form Last Name fields */
const LName = document.getElementById('LName');

LName.addEventListener('input', function() {
const inputValue = LName.value;
const onlyLetters = inputValue.replace(/[^A-Za-z]/g, '');
LName.value = onlyLetters;
});


// JavaScript code for adding items to the cart
const addToCartButton = document.getElementById('add-to-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const clearCartButton = document.getElementById('clear-cart');

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
	
});
	
// Clear the cart function
function clearCart() {
	const cartItems = document.querySelectorAll('.cart-item');
	cartItems.forEach(item => {
		item.remove();
	});
}
	
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


// Checkout listener and check cart not empty
document.getElementById('checkout').addEventListener('click', function(event) {
	// Prevent the default form submission behavior
	event.preventDefault();
	
	const cartItems = document.querySelectorAll('.cart-item');
	if (cartItems.length === 0) {
		alert('Your cart is empty. Please add items to your cart before checking out.');
		return;
	}

	// If the cart is not empty, trigger the hidden submit button in the first form
	document.getElementById('hidden-submit').click();
	
	clearCart();
	
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


	
	
// External form listener for second form	
window.addEventListener("load", function() {
window.RatufaContainer.loadForm({
	clientFormID: "cart_form",
	ratufaFormID: "cdznuino",
	nodeDomain: "n1.ratufa.io"
})

});


// Hide the loading screen when the page is fully loaded
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(function() {
      loadingScreen.style.display = 'none';
  }, 3000); // 3000 milliseconds = 3 seconds
});

