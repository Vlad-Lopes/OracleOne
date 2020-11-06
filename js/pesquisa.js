var filtro = document.querySelector("#pesquisa");

// THIS é uma referencia direta ao objeto que esta tendo o evento acompanhado
filtro.addEventListener("input", function(){
  var chave = this.value;
  var pacientes = document.querySelectorAll(".paciente");
  if (chave.length > 0) {
    pacientes.forEach(function(paciente) {
      var nome = paciente.querySelector(".info-nome").textContent;
      // Espressão regular deve ser usada para pesquisar, o "i" é para case insensitive
      var expressao = new RegExp(chave, "i");
      if (expressao.test(nome)) {
        paciente.classList.remove("invisivel");
      } else {
        paciente.classList.add("invisivel");
      }

    });
  } else {
    pacientes.forEach(function(paciente){
      paciente.classList.remove("invisivel");
    });

  }


})
