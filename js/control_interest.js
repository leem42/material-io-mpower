





function clicked() {

    if($("#select-choice-1").val() == "hasParkinsons") {
        $("#optionBoxText").show();
        $("#optionBoxTwo").show();
    }
    if($("#select-choice-1").val() == "hasParkinsons" && $("#select-choice-2").val() == "willHelp") {
        window.location.href="html/elig.html";

    }
}