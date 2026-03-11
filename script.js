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

    function placeOrder(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;

let message="New Order%0A";
message+="Name: "+name+"%0A";
message+="Phone: "+phone+"%0A";
message+="Items:%0A";

cart.forEach(item=>{
message+=item+"%0A";
});

let whatsapp="https://wa.me/919491021288?text="+message;

window.open(whatsapp,"_blank");

}


}

