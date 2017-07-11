import {MDCSelect} from '../node_modules/@material/select/dist/mdc.select.min.js';


const select = new MDCSelect(document.querySelector('#optionBoxOne'));
const selectTwo = new MDCSelect(document.querySelector('#optionBoxTwo'));

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