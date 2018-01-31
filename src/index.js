import hello from 'hello-color';
import css from '../assets/css/style.css'

let colorPicker = document.getElementById("moodColor");
let gtyDiv = document.getElementById("gtyBox");
let isHidden;

 gtyDiv.style.display = "none";
 isHidden = true;

let watchColorPicker = (event) => {
    var pickedColor = event.target.value;
    var textColor = hello(pickedColor);
   
    stylePage(pickedColor, textColor.color)
    showDiv();
}

let stylePage = (body, text) =>{
    document.body.style.color = body;
    document.body.style.backgroundColor = text;
    gtyDiv.style.backgroundColor = body;
    gtyDiv.style.color = text;
}

let showDiv = () => {
    if(isHidden){
        gtyDiv.style.display = "block"
        isHidden = false;
    }
}

colorPicker.addEventListener("change", watchColorPicker, false);