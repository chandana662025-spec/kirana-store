let cart = [];

function addToCart(item) {
    cart.push(item);
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach(i => {
        let li = document.createElement("li");
        li.innerText = i;
        cartList.appendChild(li);
    });
}

function placeOrder() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    alert("Order Placed! Please pickup from store.");

    console.log("Customer:", name);
    console.log("Phone:", phone);
    console.log("Items:", cart);

}