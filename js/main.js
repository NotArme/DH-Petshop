// console.log("main.js está sendo executado");
// console.log(document);

let nomeForm = document.querySelector('input');

console.log(nomeForm);

let dadosForm = document.querySelectorAll('input');

console.log(dadosForm);


let tituloPrincipal = document.querySelector('h1');

tituloPrincipal.innerText = "Faça parte do nosso time"


let inputEmail = document.querySelector('#email');

inputEmail.setAttribute("placeholder", "email@hotmail.com")


let inputPeriodo = document.querySelector('#periodo');

console.log(inputPeriodo.innerHTML);

inputPeriodo.innerHTML += '<option value="Trainee">Trainee</option>';

console.log(inputPeriodo.innerHTML);

tituloPrincipal.style.color = "var(--psYellow)";

let elementoDiv = document.querySelector("div");

// elementoDiv.classList.add("novaClasse");

// elementoDiv.classList.remove("container");