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

function mostraPaciente(paciente) {
    let imc = calculaIMC(paciente.peso, paciente.altura);
    let situacao = verificaIMC(imc);

    let elNome = document.getElementById("nome");
    elNome.innerHTML = paciente.nome;

    let elPeso = document.getElementById("peso");
    elPeso.innerHTML = `${paciente.peso} kg`;

    let elAltura = document.getElementById("altura");
    elAltura.innerHTML = `${paciente.altura.toString().replace(".", ",")} m`;

    let elImc = document.getElementById("imc");
    elImc.innerHTML = imc.toString().replace(".", ",");

    let elSituacao = document.getElementById("situacao");
    elSituacao.innerHTML = situacao;
};