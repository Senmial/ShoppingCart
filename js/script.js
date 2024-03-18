// Assigning all buttons and elements
const incrementButton = document.querySelectorAll('.increment');
const decrementButton = document.querySelectorAll('.decrement');
const removeButton = document.querySelectorAll('.remove');
const heartIcon = document.querySelectorAll('.heart');
const totalPriceElement = document.getElementById('totalPrice');
let totalPrice = 139800; // Initial total price before increment or decrement

//Function to update the total price
function updateTotalPrice() {
    let sum = 0;
    document.querySelectorAll('.itemBoxCart').forEach(item => {
        const price = parseInt(item.dataset.price);
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        sum += price * quantity;
    });
    totalPrice = sum;
    totalPriceElement.textContent = `Total Price: $${totalPrice}`;
}

// Add event listeners for incrememting quantity
incrementButton.forEach(button => {
    button.addEventListener('click', () => {
        const quantityElement = button.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
});
});

// Add event listeners for decrementing quantity
decrementButton.forEach(button => {
    button.addEventListener('click', () => {
        const quantityElement = button.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
            quantity--;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    });
});

// Add event listeners for removing items
removeButton.forEach(button => {
    button.addEventListener('click', () => {
        const item = event.target.parentNode.parentNode;
        item.remove();
        updateTotalPrice();
    });
});

// Add event listeners for heart icon
heartIcon.forEach(icon => {
    icon.addEventListener('click', () => {
      icon.classList.toggle('clicked');
    });
  });