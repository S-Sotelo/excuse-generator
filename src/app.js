/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "El amigo de mi perro",
  "Mi hermano pequeño",
  "El gato Roberto",
  "El Spy"
];
let action = [
  "se comió",
  "vendió",
  "bailó con mi abuela",
  "rompió con un sartén"
];
let what = [
  "mi proyecto de 4geeks",
  "el computador de mi tatarabuela",
  "mi auto nuevo"
];
let when = [
  "ayer",
  "mientras jugaba play con los chicos de mi curso de 4geeks",
  "cuando comía cereales en espacio exterior",
  "el lunes 20 de junio del año 2000",
  "cuando estaba dando clases en un avión"
];

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * b - a + a);
}

function getRandom(anyArray) {
  let max = who.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  document.querySelector("#excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
