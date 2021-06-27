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