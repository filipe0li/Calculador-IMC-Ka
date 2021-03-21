function calculaIMC(peso, altura) {
    return (peso / altura ** 2).toFixed(2);
};

function verificaIMC(imc) {
    let situacao = null;
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
    return situacao;
};

function mostraPaciente(nome, peso, altura) {
    let imc = calculaIMC(peso, altura);
    let situacao = verificaIMC(imc);

    let elNome = document.getElementById("nome");
    elNome.innerHTML = nome;

    let elPeso = document.getElementById("peso");
    elPeso.innerHTML = `${peso} kg`;

    let elAltura = document.getElementById("altura");
    elAltura.innerHTML = `${altura.toString().replace(".", ",")} m`;

    let elImc = document.getElementById("imc");
    elImc.innerHTML = imc.toString().replace(".", ",");

    let elSituacao = document.getElementById("situacao");
    elSituacao.innerHTML = situacao;
};
