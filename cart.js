const cartBtn = document.getElementById('lg-bag');
const bagBtn = document.getElementById('bag');
const cartContainer = document.querySelector('.cart-container');
const closeBtn = document.querySelector('.close-button');

// Open Cart Container
cartBtn.addEventListener('click', () => { cartContainer.classList.add('pressed') });
bagBtn.addEventListener('click', () => { cartContainer.classList.add('pressed') });
// Close Cart Container
closeBtn.addEventListener('click', () => { cartContainer.classList.remove('pressed') });

let allTotal = 0;
// Add to Cart 
function addToCart(element) {
    let mainEl = element.closest('.single-pro-details');
    let name = mainEl.querySelector('.name').textContent;
    let price = mainEl.querySelector('h2').textContent;
    let quantity = mainEl.querySelector('input').value;
    let color = mainEl.querySelector('select').value;
    let cartItems = document.querySelector('.cart-items');

    if (parseInt(quantity) > 0) {
        price = price.substring(0, 4);
        price = parseInt(price);
        let total = price * parseInt(quantity);

        allTotal += total;

        cartItems.innerHTML += `<div class="cart-single-item">
                                <h4>${name}</h4>
                                <p>${color}</p>
                                <p>${quantity} * ${price}$ = <span>${total}</span>$</p>
                                <button class="remove-btn fas fa-times" onclick="removeFromCart(this)"></button>
        </div`;
        console.log(cartItems);

        document.querySelector('.total').innerText = `Total: ${allTotal}`;

        element.textContent = 'Added';
        element.setAttribute('disabled', 'true');
        cartContainer.classList.add('pressed');
    } else{
        alert('Select a Quantity!');
    }
}

function removeFromCart(element) {
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h4').innerText;

    price = parseInt(price);

    allTotal -= price;
    document.querySelector(".total").innerText = `Total: ${allTotal}$`;

    mainEl.remove();
}