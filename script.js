let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let show = document.getElementById("show");

function somar() {
  if (number1.value == "" || number2.value == "") {
    alert("[ERRO] Necessário preencher os dois números!");
  } else {
    let result = Number(number1.value) + Number(number2.value);
    show.innerHTML = `<p>O resultado da operação é ${result}!</p>`;
  }
  number1.value = "";
  number2.value = "";
}

function subtrair() {
  if (number1.value == "" || number2.value == "") {
    alert("[ERRO] Necessário preencher os dois números!");
  } else {
    let result = Number(number1.value) - Number(number2.value);
    show.innerHTML = `<p>O resultado da operação é ${result}!</p>`;
  }
  number1.value = "";
  number2.value = "";
}

function multiplicar() {
  if (number1.value == "" || number2.value == "") {
    alert("[ERRO] Necessário preencher os dois números!");
  } else {
    let result = Number(number1.value) * Number(number2.value);
    show.innerHTML = `<p>O resultado da operação é ${result}!</p>`;
  }
  number1.value = "";
  number2.value = "";
}

function dividir() {
  if (number1.value == "" || number2.value == "") {
    alert("[ERRO] Necessário preencher os dois números!");
  } else {
    let result = Number(number1.value) / Number(number2.value);
    show.innerHTML = `<p>O resultado da operação é ${result}!</p>`;
  }
  number1.value = "";
  number2.value = "";
}
