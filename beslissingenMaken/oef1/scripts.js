

const d = new Date();
let time = d.getHours();

if(time >= 0 && time < 7){
    document.write(`<p>Het is nu: ${time} uur, goedenacht </p>`);
} else if(time >= 7 && time < 11){
    document.write(`<p>Het is nu: ${time} uur, goeiemorgen </p>`);
}else if(time >= 11 && time < 18){
    document.write(`<p>Het is nu: ${time} uur, goeiemiddag </p>`);
}else if(time > 18){
    document.write(`<p>Het is nu: ${time} uur, goeie avond </p>`);
}

