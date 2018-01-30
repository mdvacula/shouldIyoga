import hello from 'hello-color';

let colorPicker = document.getElementById("moodColor");
let gtyDiv = document.getElementById("gtyBox");
let isHidden;

gtyDiv.style.display = "none";
isHidden = true;

let watchColorPicker = (event) => {
    var pickedColor = event.target.value;
    console.log("Picked Color: " + pickedColor);
    var textColor = hello(pickedColor);
    console.log(textColor);
    
    gtyDiv.style.backgroundColor = pickedColor;
    gtyDiv.style.color = textColor.color
    document.body.style.color = pickedColor;
    document.body.style.backgroundColor = textColor.color;
    showDiv();
}

let showDiv = () => {
    if(isHidden){
        gtyDiv.style.display = "block"
    }
}

colorPicker.addEventListener("change", watchColorPicker, false);