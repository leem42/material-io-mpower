import {MDCSelect} from '../node_modules/@material/select/dist/mdc.select.min.js';


const select = new MDCSelect(document.querySelector('#optionBoxOne'));

const selectTwo = new MDCSelect(document.querySelector('#optionBoxTwo'));

select.listen('MDCSelect:change', () => {

   console.log(`Selected "${select.selectedOptions[0].textContent}" at index ${select.selectedIndex} ` +
        `with value "${select.value}"`);
});

document.getElementById("next").addEventListener('click', function(evt) {
    evt.preventDefault();
  
     if(select.index != 0) {
        console.log("clicked at 26");

        $("#optionBoxText").show();
        $("#optionBoxTwo").show();
    }
    // if($("#select-choice-1").val() == "hasParkinsons" && $("#select-choice-2").val() == "willHelp") {
    //     window.location.href="html/elig.html";
    // }


});