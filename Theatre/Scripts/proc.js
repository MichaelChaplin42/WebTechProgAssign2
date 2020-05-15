const price = document.getElementById("price");
const sprice = document.getElementById("sprice");
const dprice = document.getElementById("dprice");
const order = document.getElementById("order");
const showchoice = document.getElementsByName("show");
const deliverchoice = document.getElementsByName("ticket");
const amount = document.getElementById("amount");

let showcost = 0;
let delivercost = 0;
let totalcost = 0;
let finalcost = 0;
let discount = 0
let discountcost = 0
let show = ""
let deliver = ""
order.addEventListener("click", placeOrder);
for (let i = 0; i < showchoice.length; i++) {
    showchoice[i].addEventListener("change",
        showcalc);
}
for (let i = 0; i < deliverchoice.length; i++) {
    deliverchoice[i].addEventListener("change", delivercalc);
}
function placeOrder() {
    event.preventDefault();

    totalcost = showcost * amount.value;
    if (amount.value < 6) {
        discount = 0
    }
    else if (amount.value > 5 && amount.value < 10) {
        discount = 0.1
    }
    else if (amount.value > 9)
    {
        discount = 0.15
    }
    discountcost = totalcost*discount;
    finalcost = totalcost - discountcost + delivercost;
    price.innerText =
        `${(amount.value)} tickets for ${(show)} at £${showcost.toFixed(2)}\nTotal cost: £${totalcost.toFixed(2)}\n${(discount)*100}% discount £${discountcost.toFixed(2)}\n${deliver}: £${delivercost.toFixed(2)}\nFinal cost £${finalcost.toFixed(2)}`;
}



function showcalc() {
    show = this.value;
    if (this.value == "Phantom of the opera") {
        showcost = 79;
    }
    else if (this.value == "Hamilton") {
        showcost = 85;
    }
    else if (this.value == "Lion King"){
        showcost = 67;
    }
    else {
        showcost = 83;
    }
    sprice.innerText = `£${(showcost.toFixed(2))} Per ticket`
}
function delivercalc() {
    deliver = this.value;
    if (this.value == "E-ticket") {
        delivercost = 0;
    }
    else if (this.value == "Collect from box office") {
        delivercost = 1.5;
    }
    else if (this.value == "Posted"){
        delivercost = 3.99;
    }
    dprice.innerText = `£${(delivercost.toFixed(2))}`
}
