var nome = "Renato Oliveira";
var peso = 76.00;
var altura = 1.78;
var imc = (peso / (altura ** 2)).toFixed(2);

/*
console.log(nome);
console.log(`Peso: ${peso} - Altura: ${altura}`);
console.log(`Cálculo do IMC: ${imc}`); //Limita para duas casas depois da virgula.
*/

var elNome = document.getElementById("nome");
elNome.innerHTML = nome;

var elPeso = document.getElementById("peso");
elPeso.innerHTML = peso;

var elAltura = document.getElementById("altura");
elAltura.innerHTML = altura;

var elImc = document.getElementById("imc");
elImc.innerHTML = imc;