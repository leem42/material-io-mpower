import {MDCSelect} from '../node_modules/@material/select/dist/mdc.select.min.js';


const select = new MDCSelect(document.querySelector('#optionBoxOne'));
const selectTwo = new MDCSelect(document.querySelector('#optionBoxTwo'));



select.listen('MDCSelect:change', () => {
    if(select.selectedIndex != -1) {
            $('#inputHasParkinsons').removeClass("glow");
    }     
});

selectTwo.listen('MDCSelect:change', () => {
    if(selectTwo.selectedIndex != -1) {
            $('#inputComfortable').removeClass("glow");
    }     
});

document.getElementById("next").addEventListener('click', function(evt) {
    evt.preventDefault();

     if(select.selectedIndex != -1) {
        $("#optionBoxText").show();
        $("#optionBoxTwo").show();

    }
    if(select.selectedIndex != -1 && selectTwo.selectedIndex != -1) {
        window.location.href+="html/elig.html";
    }

});