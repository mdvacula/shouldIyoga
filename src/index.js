import hello from 'hello-color';
import css from '../assets/css/style.css'

let colorPicker = document.getElementById("moodColor");
let gtyDiv = document.getElementById("gtyBox");
let isHidden;
let col;
 gtyDiv.style.display = "none";
 isHidden = true;


let processMouse = (event) => {
    let r = (window.event.clientX /255)*100;
    let g = (window.event.clientY /255)*100;
    let b = (r/g)*10;

    col = `rgb(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)})`;
    // console.log(col);
   document.body.style.backgroundColor = col;
}

let pickColor = (event) => {
    console.log(col);
    var pickedColor = col;
    var textColor = hello(pickedColor);
   
    stylePage(pickedColor, textColor.color)
    showDiv();
}

window.onmousemove = processMouse;
window.onmousedown = pickColor;
 


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