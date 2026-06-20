const cartItemsContainer = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {

    cartItemsContainer.innerHTML = "";

    let total = 0;

    if(cart.length === 0){

        cartItemsContainer.innerHTML = `
            <h2>Your Cart Is Empty 🛒</h2>
        `;

        totalPriceEl.innerText = "₹0";
        return;
    }

    cart.forEach((item,index)=>{

        total += parseInt(item.price.replace("₹",""));

        cartItemsContainer.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" width="150">

            <div class="cart-details">

                <h2>${item.name}</h2>

                <h3>${item.price}</h3>

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        </div>

        <hr>
        `;
    });

    totalPriceEl.innerText = `₹${total}`;
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

window.removeItem = removeItem;

displayCart();

document.getElementById("checkoutBtn")
.addEventListener("click",()=>{

    localStorage.removeItem("cart");

    alert("Order Placed Successfully!");

    location.reload();

});