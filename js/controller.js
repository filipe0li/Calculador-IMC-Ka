let pacientes = [];
const botaoCalcular = document.getElementById("calcular");
botaoCalcular.addEventListener("click", function () {
    try {
        var paciente = lePaciente();
    } catch (error) {
        alert(error);
        return;
    }
    pacientes.push(paciente);   // Adiciona paciente em memória.
    mostraPaciente(paciente);
});

const botaoRelatorio = document.getElementById("relatorio");
botaoRelatorio.addEventListener("click", function () {
    geraRelatorio(pacientes);
});

/*
console.log(nome);
console.log(`Peso: ${peso} - Altura: ${altura}`);
console.log(`Cálculo do IMC: ${imc}`); //Limita para duas casas depois da vírgula.
*/