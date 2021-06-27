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