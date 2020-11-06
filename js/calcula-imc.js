document.querySelector(".titulo").textContent = "Aparecida Nutricionista";

// Calculo IMC

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var peso = parseFloat(paciente.querySelector(".info-peso").textContent);
  var altura = parseFloat(paciente.querySelector(".info-altura").textContent);

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura);
    paciente.querySelector(".info-imc").textContent = imc;
  } else {
    paciente.querySelector(".info-imc").textContent = "Peso e/ou Altura inválidos"
    paciente.classList.add("paciente-invalido");
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = (peso / (altura * altura)).toFixed(2);
  return imc
}

function validaPeso(peso) {
  if (peso > 0 && peso < 500) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura < 3) {
    return true;
  } else {
    return false;
  }
}
