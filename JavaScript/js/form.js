// Definindo o paciente

var paciente = {
  nome: "",
  peso: 0,
  altura: 0,
  gordura: 0,
  imc: 0
};

var adicionarPaciente = document.querySelector("#adicionar-paciente");

adicionarPaciente.addEventListener("click", incluiPaciente);

function incluiPaciente(event) {
  event.preventDefault();
  // var form = document.querySelector(".container > form"); outra forma

  var form = document.querySelector("#form-adiciona");

  obtemPaciente(form);

  var erros = validaPaciente();

  if (erros.length > 0) {
      mostraErros(erros);

      return;  // para encerrar a função e não criar uma nova linha na tabela
    }

  adicionaPaciente(paciente);

  form.reset();
  document.querySelector("#erros").innerHTML = "";
}

function obtemPaciente(form) {

  paciente.nome = form.nome.value;
  paciente.peso = form.peso.value;
  paciente.altura = form.altura.value;
  paciente.gordura = form.gordura.value;
  paciente.imc = calculaImc(paciente.peso, paciente.altura);

}

function adicionaPaciente(paciente) {
  var pacienteTr = criaTr(paciente)

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function criaTd(dado, classe) {
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td

}

function criaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

  return pacienteTr
}

function validaPaciente() {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("Informe nome do paciente.");
  }
  if (paciente.peso.length == 0) {
    erros.push("Informe peso do paciente.");
  }

  if (paciente.altura.length == 0) {
    erros.push("Informe altura do paciente.");
  }
  if (paciente.gordura.length == 0) {
    erros.push("Informe percentual de gordura do paciente.");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso inválido");
  }
  if (!validaAltura(paciente.altura)) {
    erros.push("Altura inválida");
  }

  return erros;
}

function mostraErros(erros) {
  var ul = document.querySelector("#erros");
  ul.innerHTML = "";

  erros.forEach(function (erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });

}
