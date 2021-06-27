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

Order.prototype.add = function(){
    if(this.quantity <= 0){
        alert("Order Quantity Must Be More Than 1! Please Try Again.")
    }
    else if (this.toppingChoices == '' || this.pizzaSize == '' || this.crustType == ''){
        alert("You must choose a Topping, Pizza Size & Crust Type! Please Try Again.")
    }
    //Chicken & Beef Pepperoni (Crispy Crust)
    if (this.toppingChoices == 1 && this.pizzaSize == 1 && this.crustType == 1){
        if(this.deliveryOption == "No"){
            let pretotal= crispyPrice + chickenBeefPepperoniPrices[0];
            let total = (crispyPrice + chickenBeefPepperoniPrices[0]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= crispyPrice + chickenBeefPepperoniPrices[0];
            let total = (crispyPrice + chickenBeefPepperoniPrices[0]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        } 
    }
    if (this.toppingChoices == 1 && this.pizzaSize == 2 && this.crustType == 1){
        if(this.deliveryOption == "No"){
            let pretotal= crispyPrice + chickenBeefPepperoniPrices[1];
            let total = (crispyPrice + chickenBeefPepperoniPrices[1]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= crispyPrice + chickenBeefPepperoniPrices[1];
            let total = (crispyPrice + chickenBeefPepperoniPrices[1]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 1 && this.pizzaSize == 3 && this.crustType == 1){
        if(this.deliveryOption == "No"){
            let pretotal= crispyPrice + chickenBeefPepperoniPrices[2];
            let total = (crispyPrice + chickenBeefPepperoniPrices[2]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= crispyPrice + chickenBeefPepperoniPrices[2];
            let total = (crispyPrice + chickenBeefPepperoniPrices[2]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal; 
        }
    }
    if (this.toppingChoices == 1 && this.pizzaSize == 4 && this.crustType == 1){
        if(this.deliveryOption == "No"){
            let pretotal= crispyPrice + chickenBeefPepperoniPrices[3];
            let total = (crispyPrice + chickenBeefPepperoniPrices[3]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= crispyPrice + chickenBeefPepperoniPrices[3];
            let total = (crispyPrice + chickenBeefPepperoniPrices[3]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    //Chicken & Beef Pepperoni (Stuffed Crust)
    if (this.toppingChoices == 1 && this.pizzaSize == 1 && this.crustType == 2){
        if(this.deliveryOption == "No"){
            let pretotal= stuffedPrice + chickenBeefPepperoniPrices[0];
            let total = (stuffedPrice + chickenBeefPepperoniPrices[0]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= stuffedPrice + chickenBeefPepperoniPrices[0];
            let total = (stuffedPrice + chickenBeefPepperoniPrices[0]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 1 && this.pizzaSize == 2 && this.crustType == 2){
        if(this.deliveryOption == "No"){
            let pretotal= stuffedPrice + chickenBeefPepperoniPrices[1];
            let total = (stuffedPrice + chickenBeefPepperoniPrices[1]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= stuffedPrice + chickenBeefPepperoniPrices[1];
            let total = (stuffedPrice + chickenBeefPepperoniPrices[1]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 1 && this.pizzaSize == 3 && this.crustType == 2){
        if(this.deliveryOption == "No"){
            let pretotal= stuffedPrice + chickenBeefPepperoniPrices[2];
            let total = (stuffedPrice + chickenBeefPepperoniPrices[2]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= stuffedPrice + chickenBeefPepperoniPrices[2];
            let total = (stuffedPrice + chickenBeefPepperoniPrices[2]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 1 && this.pizzaSize == 4 && this.crustType == 2){
        if(this.deliveryOption == "No"){
            let pretotal= stuffedPrice + chickenBeefPepperoniPrices[3];
            let total = (stuffedPrice + chickenBeefPepperoniPrices[3]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= stuffedPrice + chickenBeefPepperoniPrices[3];
            let total = (stuffedPrice + chickenBeefPepperoniPrices[3]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    //Chicken & Beef Pepperoni (Gluten Free Crust)
    if (this.toppingChoices == 1 && this.pizzaSize == 1 && this.crustType == 3){
        if(this.deliveryOption == "No"){
            let pretotal= glutenFreePrice + chickenBeefPepperoniPrices[0];
            let total = (glutenFreePrice + chickenBeefPepperoniPrices[0]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= glutenFreePrice + chickenBeefPepperoniPrices[0];
            let total = (glutenFreePrice + chickenBeefPepperoniPrices[0]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 1 && this.pizzaSize == 2 && this.crustType == 3){
        if(this.deliveryOption == "No"){
            let pretotal= glutenFreePrice + chickenBeefPepperoniPrices[1];
            let total = (glutenFreePrice + chickenBeefPepperoniPrices[1]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= glutenFreePrice + chickenBeefPepperoniPrices[1];
            let total = (glutenFreePrice + chickenBeefPepperoniPrices[1]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 1 && this.pizzaSize == 3 && this.crustType == 3){
        if(this.deliveryOption == "No"){
            let pretotal= glutenFreePrice + chickenBeefPepperoniPrices[2];
            let total = (glutenFreePrice + chickenBeefPepperoniPrices[2]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= glutenFreePrice + chickenBeefPepperoniPrices[2];
            let total = (glutenFreePrice + chickenBeefPepperoniPrices[2]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 1 && this.pizzaSize == 4 && this.crustType == 3){
        if(this.deliveryOption == "No"){
            let pretotal= glutenFreePrice + chickenBeefPepperoniPrices[3];
            let total = (glutenFreePrice + chickenBeefPepperoniPrices[3]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= glutenFreePrice + chickenBeefPepperoniPrices[3];
            let total = (glutenFreePrice + chickenBeefPepperoniPrices[3]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }

    //Chicken Hawaiian (Crispy Crust)
    if (this.toppingChoices == 2 && this.pizzaSize == 1 && this.crustType == 1){
        if(this.deliveryOption == "No"){
            let pretotal= crispyPrice + chickenHawaiianPrices[0];
            let total = (crispyPrice + chickenHawaiianPrices[0]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= crispyPrice + chickenHawaiianPrices[0];
            let total = (crispyPrice + chickenHawaiianPrices[0]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 2 && this.pizzaSize == 2 && this.crustType == 1){
        if(this.deliveryOption == "No"){
            let pretotal= crispyPrice + chickenHawaiianPrices[1];
            let total = (crispyPrice + chickenHawaiianPrices[1]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= crispyPrice + chickenHawaiianPrices[1];
            let total = (crispyPrice + chickenHawaiianPrices[1]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 2 && this.pizzaSize == 3 && this.crustType == 1){
        if(this.deliveryOption == "No"){
            let pretotal= crispyPrice + chickenHawaiianPrices[2];
            let total = (crispyPrice + chickenHawaiianPrices[2]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= crispyPrice + chickenHawaiianPrices[2];
            let total = (crispyPrice + chickenHawaiianPrices[2]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 2 && this.pizzaSize == 4 && this.crustType == 1){
        if(this.deliveryOption == "No"){
            let pretotal= crispyPrice + chickenHawaiianPrices[3];
            let total = (crispyPrice + chickenHawaiianPrices[3]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= crispyPrice + chickenHawaiianPrices[3];
            let total = (crispyPrice + chickenHawaiianPrices[3]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }

    //Chicken Hawaiian (Stuffed Crust)
    if (this.toppingChoices == 2 && this.pizzaSize == 1 && this.crustType == 2){
        if(this.deliveryOption == "No"){
            let pretotal= stuffedPrice + chickenHawaiianPrices[0];
            let total = (stuffedPrice + chickenHawaiianPrices[0]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= crispyPrice + chickenHawaiianPrices[0];
            let total = (crispyPrice + chickenHawaiianPrices[0]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 2 && this.pizzaSize == 2 && this.crustType == 2){
        if(this.deliveryOption == "No"){
            let pretotal= stuffedPrice + chickenHawaiianPrices[1];
            let total = (stuffedPrice + chickenHawaiianPrices[1]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= stuffedPrice + chickenHawaiianPrices[1];
            let total = (stuffedPrice + chickenHawaiianPrices[1]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 2 && this.pizzaSize == 3 && this.crustType == 2){
        if(this.deliveryOption == "No"){
            let pretotal= stuffedPrice + chickenHawaiianPrices[2];
            let total = (stuffedPrice + chickenHawaiianPrices[2]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= stuffedPrice + chickenHawaiianPrices[2];
            let total = (stuffedPrice + chickenHawaiianPrices[2]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 2 && this.pizzaSize == 4 && this.crustType == 2){
        if(this.deliveryOption == "No"){
            let pretotal= stuffedPrice + chickenHawaiianPrices[3];
            let total = (stuffedPrice + chickenHawaiianPrices[3]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= stuffedPrice + chickenHawaiianPrices[3];
            let total = (stuffedPrice + chickenHawaiianPrices[3]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }

    //Chicken Hawaiian (Gluten Free Crust)
    if (this.toppingChoices == 2 && this.pizzaSize == 1 && this.crustType == 3){
        if(this.deliveryOption == "No"){
            let pretotal= glutenFreePrice + chickenHawaiianPrices[0];
            let total = (glutenFreePrice + chickenHawaiianPrices[0]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= glutenFreePrice + chickenHawaiianPrices[0];
            let total = (glutenFreePrice + chickenHawaiianPrices[0]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 2 && this.pizzaSize == 2 && this.crustType == 3){
        if(this.deliveryOption == "No"){
            let pretotal= glutenFreePrice + chickenHawaiianPrices[1];
            let total = (glutenFreePrice + chickenHawaiianPrices[1]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= glutenFreePrice + chickenHawaiianPrices[1];
            let total = (glutenFreePrice + chickenHawaiianPrices[1]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 2 && this.pizzaSize == 3 && this.crustType == 3){
        if(this.deliveryOption == "No"){
            let pretotal= glutenFreePrice + chickenHawaiianPrices[2];
            let total = (glutenFreePrice + chickenHawaiianPrices[2]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= glutenFreePrice + chickenHawaiianPrices[2];
            let total = (glutenFreePrice + chickenHawaiianPrices[2]) * this.quantity;
            let orderTotal = total + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
    }
    if (this.toppingChoices == 2 && this.pizzaSize == 4 && this.crustType == 3){
        if(this.deliveryOption == "No"){
            let pretotal= glutenFreePrice + chickenHawaiianPrices[3];
            let total = (glutenFreePrice + chickenHawaiianPrices[3]) * this.quantity;
            let orderTotal = total;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            alert("Grand Total: Ksh. " + orderTotal + "\n" + "Thank You For Your Purchase!!!");
            return orderTotal;
        }
        else{
            let pretotal= stuffedPrice + chickenHawaiianPrices[3];
            let total = (stuffedPrice + chickenHawaiianPrices[3]) * this.quantity;
            let orderTotal = total  + deliveryTransport;
            document.getElementById("pbq").innerHTML = pretotal;
            document.getElementById("paq").innerHTML = "Ksh. " + total;
            return orderTotal;
        }
    }
    
}