import { MDCSelect } from '../node_modules/@material/select/dist/mdc.select.min.js';


const select = new MDCSelect(document.querySelector('#optionBoxThree'));


select.listen('MDCSelect:change', () => {

   
    if(select.selectedIndex != -1) {
            $('#optionBoxThree').removeClass("glow");
    }
     
});


$(window).load(function () {
    $('#ageBorder div:first').removeClass();
    $('#homeBorder div:first').removeClass();

})


document.getElementById("next").addEventListener('click', function (evt) {

    if ($("#inputAge").val() != "") {
        $("#inputAge").removeClass();
        $(".partTwo").show();
        $("#inputLive").focus();

    }

    if ($("#inputAge").val() != null && $("#inputLive").val() != "") {
        $(".partThree").show();
            
            
        $('#optionBoxThree').addClass("glow");
        $('#optionBoxThree').focus();

    }

    if ($("#inputAge").val() != null && $("#inputLive").val() != "" && select.selectedIndex != -1) {
        var location = window.location.href.replace("elig.html", "congrats.html");
        window.location.href = location;
    }

});