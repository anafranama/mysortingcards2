/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

let listanumeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "k", "Q"];
let listasimbolos = ["&#x2665", "\u2660", "&#x2663", "&#x2666"];
let nuevonum = [];
let nuevossimb = [];

let cantidad = document.getElementById("texto");
let mostrar = document.getElementById("btn1");
let cards = document.getElementById("cards1");

mostrar.addEventListener("click", () => {
  cantidad = cantidad.value;
  let listatotal1 = [];
  let listatotal2 = [];

  for (let i = 0; i < cantidad; i++) {
    var numeros = Math.floor(Math.random() * 13);

    nuevonum[i] = numeros;

    var simbolos = Math.floor(Math.random() * 4);
    nuevossimb[i] = simbolos;
    let padre = document.createElement("div");
    let arriba = document.createElement("div");
    let medio = document.createElement("div");
    let abajo = document.createElement("div");

    if (
      listasimbolos[simbolos] == listasimbolos[0] ||
      listasimbolos[simbolos] == listasimbolos[3]
    ) {
      arriba.style.color = "red";
      abajo.style.color = "red";
    }

    arriba.innerHTML = listasimbolos[simbolos];
    medio.innerHTML = listanumeros[numeros];
    abajo.innerHTML = listasimbolos[simbolos];

    padre.classList.add("tarjets");
    arriba.classList.add("v1");
    medio.classList.add("v2");
    abajo.classList.add("v3");

    padre.appendChild(arriba);
    padre.appendChild(medio);
    padre.appendChild(abajo);
    cards.appendChild(padre);
  }

  let btn = document.querySelector("#btn3");
  btn.addEventListener("click", bubble_Sort);

  function bubble_Sort() {
    let swapp;
    let n = nuevonum.length - 1;
    let x = nuevonum;
    let y = nuevossimb;

    do {
      swapp = false;
      for (let j = 0; j < n; j++) {
        if (x[j] > x[j + 1]) {
          let temp1 = y[j];
          y[j] = y[j + 1];
          y[j + 1] = temp1;

          let temp = x[j];
          x[j] = x[j + 1];
          x[j + 1] = temp;
          swapp = true;
        }
      }

      n--;
    } while (swapp);

    let lista = document.querySelector("#listanumeros1");
    for (let k = 0; k < nuevonum.length; k++) {
      let item = document.createElement("li");

      let item2 = document.createElement("li");

      let padre = document.createElement("div");
      let arriba = document.createElement("div");
      let medio = document.createElement("div");
      let abajo = document.createElement("div");

      if (
        listasimbolos[nuevossimb[k]] == listasimbolos[0] ||
        listasimbolos[nuevossimb[k]] == listasimbolos[3]
      ) {
        arriba.style.color = "red";
        abajo.style.color = "red";
      }

      arriba.innerHTML = listasimbolos[nuevossimb[k]];
      medio.innerHTML = listanumeros[nuevonum[k]];
      abajo.innerHTML = listasimbolos[nuevossimb[k]];

      padre.classList.add("tarjets");
      arriba.classList.add("v1");
      medio.classList.add("v2");
      abajo.classList.add("v3");

      padre.appendChild(arriba);
      padre.appendChild(medio);
      padre.appendChild(abajo);

      cards2.appendChild(padre);
    }
  }

  const selectSort = () => {
    let min = 0;
    while (min < nuevonum.length - 1) {
      for (let m = min + 1; m < nuevonum.length; m++) {
        if (nuevonum[min] > nuevonum[m]) {
          let aux = nuevonum[min];

          let aux2 = nuevossimb[min];

          nuevonum[min] = nuevonum[m];
          nuevossimb[min] = nuevossimb[m];
          nuevossimb[m] = aux2;
          nuevonum[m] = aux;
        }
      }

      min++;
    }

    for (let h = 0; h < nuevonum.length; h++) {
      let padre = document.createElement("div");
      let arriba = document.createElement("div");
      let medio = document.createElement("div");
      let abajo = document.createElement("div");

      if (
        listasimbolos[nuevossimb[h]] == listasimbolos[0] ||
        listasimbolos[nuevossimb[h]] == listasimbolos[3]
      ) {
        arriba.style.color = "red";
        abajo.style.color = "red";
      }

      arriba.innerHTML = listasimbolos[nuevossimb[h]];
      medio.innerHTML = listanumeros[nuevonum[h]];
      abajo.innerHTML = listasimbolos[nuevossimb[h]];

      padre.classList.add("tarjets");
      arriba.classList.add("v1");
      medio.classList.add("v2");
      abajo.classList.add("v3");

      padre.appendChild(arriba);
      padre.appendChild(medio);
      padre.appendChild(abajo);

      cards3.appendChild(padre);
    }
  };

  let btn2 = document.querySelector("#btn2");
  btn2.addEventListener("click", selectSort);
});
