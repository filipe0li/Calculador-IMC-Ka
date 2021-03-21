let nome = "Renato Oliveira";
let peso = 76.00;
let altura = 1.78;
let imc = (peso / (altura ** 2)).toFixed(2);
let situacao = null;

/*
console.log(nome);
console.log(`Peso: ${peso} - Altura: ${altura}`);
console.log(`Cálculo do IMC: ${imc}`); //Limita para duas casas depois da vírgula.
*/

if (imc < 18.5) {
    situacao = "Magreza";
}
else if (imc <= 24.9) {
    situacao = "Normal";
}
else if (imc <= 30) {
    situacao = "Sobrepeso";
}
else {
    situacao = "Obesidade";
}

let elNome = document.getElementById("nome");
elNome.innerHTML = nome;

let elPeso = document.getElementById("peso");
elPeso.innerHTML = `${peso} kg`;

let elAltura = document.getElementById("altura");
elAltura.innerHTML = `${altura.toString().replace(".", ",")} m`;

let elImc = document.getElementById("imc");
elImc.innerHTML = imc.replace(".", ",");

let elSituacao = document.getElementById("situacao");
elSituacao.innerHTML = situacao;