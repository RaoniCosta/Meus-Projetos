// Desafio 1
function compareTrue(comparação1, comparação2) {
if (comparação1 === true & comparação2 === true) {
return true;
 } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(trybe) {
  let slipt = trybe.split(' ');
  return slipt;
}
// Desafio 4
function concatName(listadenomes) {
  // seu código aqui
  let primeironome = listadenomes[0];
  let ultimonome = listadenomes[listadenomes.length - 1];
  let string = ultimonome + ", " + primeironome;
  return string;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado = wins * 3 + ties;
  return resultado;
}
// Desafio 6
function highestCount(lista) {
  let m =Math.max(...lista);
  let soma=0
  let i=0
  for(i===0; i<=lista.length-1; i++) {
    if (lista[i] === m) {
      soma++;
    }
}
return soma
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse,cat1,cat2){
let distanciaCat1 = Math.abs(mouse-cat1);
let distanciaCat2 = Math.abs(mouse-cat2);
let pegou;

if (distanciaCat1 < distanciaCat2) {
pegou = "cat1";

} else if (distanciaCat2 < distanciaCat1){
pegou = "cat2";

} else if (distanciaCat1 === distanciaCat2){
pegou = "os gatos trombam e o rato foge";
}
return pegou;
}
console.log(catAndMouse(1,0,2));

// Desafio 8
function fizzBuzz(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (arr[i] % 3 === 0) {
      array.push('fizz');
    } else if (arr[i] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
