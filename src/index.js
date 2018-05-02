import hello from 'hello-color';
import html2canvas from 'html2canvas';
import fileSaver from 'file-saver';
import css from '../assets/css/style.css';

let gtyDiv = document.getElementById("gtyBox");
let isHidden;
let col;

gtyDiv.style.display = "none";
isHidden = true;

//handle mouse movements
let processMouse = (event) => {
    let iW = window.innerWidth;
    let iH = window.innerHeight;
    let r = (window.event.clientX / iW)*1000;
    let g = (window.event.clientY / iH)*1000;
    let b = (r/g)*10;

    col = `rgb(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)})`;
    // console.log(col);
   document.body.style.backgroundColor = col;
}

//pick the color and pass the colors to style page
let pickColor = (event) => {
    console.log(event.path[0]);
     if(event.path[0].getAttribute('id') != 'gtyBox'){
        var pickedColor = col;
        var textColor = hello(pickedColor);
        stylePage(pickedColor, textColor.color);
        showDiv();
        }
    }

//change the colors
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

let printDiv = () => {
    let div = gtyDiv;
    let background = gtyDiv.style.backgroundColor;
    html2canvas(div,{backgroundColor: `${background}`}).then((canvas)=>{
            console.log(canvas);
        canvas.toBlob((blob)=> {
            fileSaver.saveAs(blob, "shIyoga.png");
        });
    });
}

window.onmousemove = processMouse;
document.body.onclick = pickColor;
gtyDiv.onclick = printDiv;