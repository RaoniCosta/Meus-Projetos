let black = document.getElementsByClassName('color')[0].style.background = 'black';
let yellow = document.getElementsByClassName('color')[1].style.background = 'yellow';
let green = document.getElementsByClassName('color')[2].style.background = 'green';
let red = document.getElementsByClassName('color')[3].style.background = 'red';


/*const paletaDeCores = document.getElementById("color-palette")

function getColor(event) {
    for (let i = 0; i < paletaDeCores.length; i += 1) {
        if (paletaDeCores[i].className === "color selected") {
            paletaDeCores[i].className = "color";
            break;
        }
    }
    event.target.className = "color selected";
}
for (let index = 0; index < paletaDeCores.length; index += 1) {
    paletaDeCores[i].addEventLister("click", getColor);

}
function painting(event) {
    event.target.style.backgroundcolor = Windows.getComputedStyle(document.getElementsByClassName('color selected')
    [0].getPropertyValue('background-color'));
}
*/

//colorir pixel de preto 


function pintarpixel(pixel) {
    pixel.style.background = corclick;
}

let corclick = 'black'

function setPenColour(color) {
    corclick = color;
}


//requisito 7 classe selected 





//   requisito 9 - botão limpar - preencher o quadro de branco

botaolimpar = document.getElementById("clear-board")
function limparcor() {
    const pixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
    }
}
botaolimpar.addEventListener("click", limparcor) 