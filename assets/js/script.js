$(document).ready(function(){
    $(".desc").hide();
    $("#toppingChoices").on("change", function() {
        $(".desc").hide();
        $("#" + $(this).val()).show();
    })

    $("#Yes").hide();
    $("#deliveryOption").on("change", function() {
        $("#Yes").hide();
        $("#" + $(this).val()).show();
    })
})

let chickenBeefPepperoniPrices = [300, 550, 750, 950];
let chickenHawaiianPrices = [350, 600, 800, 1000];
let chickenMaconBBQPrices = [400, 650, 850, 1050];
let meatDeluxePrices = [450, 700, 900, 1100];
let crispyPrice = 200;
let stuffedPrice = 350;
let glutenFreePrice = 500;
let deliveryTransport = 500;

//Pizza Order
function pizzaOrder(event){
    event.preventDefault();

    let pizzaOrder = new Order(
        document.getElementById("toppingChoices").value,
        document.getElementById("pizzaSize").value,
        document.getElementById("crustType").value,
        document.getElementById("quantity").value,
        document.getElementById("deliveryOption").value,
    );

    document.getElementById("orderTotal").innerHTML = pizzaOrder.add();
}

function Order(toppingChoices, pizzaSize, crustType, quantity, deliveryOption){
    this.toppingChoices = toppingChoices;
    this.pizzaSize = pizzaSize;
    this.crustType = crustType;
    this.quantity = quantity;
    this.deliveryOption = deliveryOption;
}