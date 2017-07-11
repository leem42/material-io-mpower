import {MDCSelect} from '../node_modules/@material/select/dist/mdc.select.min.js';


const select = new MDCSelect(document.querySelector('#optionBoxThree'));


$(window).load(function() {
    $('#ageBorder div:first').removeClass();
    $('#homeBorder div:first').removeClass();

})


document.getElementById("next").addEventListener('click', function(evt) {

    if($("#inputAge").val() != "") {
        // $("#age").removeClass("col-md-4 col-md-offset-4").addClass("col-sm-12 col-md-3 col-md-offset-3")
        $(".partTwo").show();
        
    }

    if($("#inputAge").val() != null &&  $("#inputLive").val() != "" ){
        $(".partThree").show();
    }

    if(   $("#inputAge").val() != null  &&  $("#inputLive").val() != ""  &&  select.selectedIndex != -1) {
        var location = window.location.href.replace("elig.html","congrats.html");
        window.location.href = location;
    }

});