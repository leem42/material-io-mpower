


var list = [];
for (var i = 10; i <= 100; i++) {
    list.push(i);
}

$(window).load(function() {

    $.each(list, function(key) {   
        $('#select-native-1')
            .append($("<option></option>")
                        .attr("value",key)
                        .text(key + 18)); 
    });

});

function clicked() {


    if($("#select-native-1").val() != null) {
        $("#age").removeClass("col-md-4 col-md-offset-4").addClass("col-sm-12 sm-pull-left col-md-3 col-md-offset-3")
        $("#optionBoxOne").show();
    }

    if($("#select-native-1").val() != null &&  $("#placeField").val() != "" ){
        $("#optionBoxTwo").show();
    }

    if(   $("#optionBoxTwo").val() != "" ) {
        
    }

}




