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

    const elNome = document.getElementById("nome");
    elNome.innerHTML = paciente.nome;

    const elPeso = document.getElementById("peso");
    elPeso.innerHTML = `${paciente.peso} kg`;

    const elAltura = document.getElementById("altura");
    elAltura.innerHTML = `${paciente.altura.toString().replace(".", ",")} m`;

    const elImc = document.getElementById("imc");
    elImc.innerHTML = imc.toString().replace(".", ",");

    let elSituacao = document.getElementById("situacao");
    elSituacao.innerHTML = situacao;
};

function lePaciente() {
    const inputNome = document.getElementById("txtNome");
    const inputPeso = document.getElementById("txtPeso");
    const inputAltura = document.getElementById("txtAltura");

    if (inputPeso.value == "" || inputAltura.value == "") { // Impede entrada de dados inválidos.
        throw "Favor preencha os dados corretamente!";
    }

    let paciente = {
        nome: inputNome.value,
        peso: inputPeso.value,
        altura: inputAltura.value
    };

    return paciente;
};

function geraRelatorio(pacientes) {
    const listaNumerada = document.getElementById("listaNumerada");
    listaNumerada.innerHTML = null; // Limpa lista.

    pacientes.forEach(paciente => {
        let imc = calculaIMC(paciente.peso, paciente.altura);
        let situacao = verificaIMC(imc);
        listaNumerada.innerHTML += `<li>${paciente.nome} - Situação: ${situacao}</li>`;
    });
};