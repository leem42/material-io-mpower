



$(window).load(function() {

    $('#formAge div:first').removeClass();
    $("#introText").height($("#ageField").height());

})


document.getElementById("next").addEventListener('click', function(evt) {

    if($("#inputOne").val() != "") {
        $("#age").removeClass("col-md-4 col-md-offset-4").addClass("col-sm-12 col-md-3 col-md-offset-3")
        $("#optionBoxOne").show();

    }

    if($("#inputAge").val() != null &&  $("#placeField").val() != "" ){
        $("#optionBoxTwo").show();

    }

    if(   $("#inputAge").val() != null  &&  $("#placeField").val() != ""  &&  $("#select-native-2").val() == "isComfortable") {
        var location = window.location.href.replace("elig.html","congrats.html");
        window.location.href = location;
    }

});