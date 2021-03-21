let nome = "Renato Oliveira";
let peso = 76.00;
let altura = 1.78;
let imc = (peso / (altura ** 2)).toFixed(2);
let situacao = null;

/*
console.log(nome);
console.log(`Peso: ${peso} - Altura: ${altura}`);
console.log(`Cálculo do IMC: ${imc}`); //Limita para duas casas depois da virgula.
*/

if (imc < 18.5) {
    situacao = "Magreza";
}
else if (imc <= 24.9) {
    situacao = "Normal";
}
else if (imc <= 30) {
    situacao = "Sobrpeso";
}
else {
    situacao = "Obesidade";
}

let elNome = document.getElementById("nome");
elNome.innerHTML = nome;

let elPeso = document.getElementById("peso");
elPeso.innerHTML = peso;

let elAltura = document.getElementById("altura");
elAltura.innerHTML = altura.toString().replace(".", ",");

let elImc = document.getElementById("imc");
elImc.innerHTML = imc.replace(".", ",");

let elSituacao = document.getElementById("situacao");
elSituacao.innerHTML = situacao;