var colorPicker = document.getElementById("moodColor");
var gtyDiv = document.getElementById("gtyBox");
var isHidden;

gtyDiv.style.display = "none";
isHidden = true;

// colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
    gtyDiv.style.backgroundColor = event.target.value;
    showDiv();
}

function showDiv() {
    if(isHidden){
        gtyDiv.style.display = "block"
    }
}