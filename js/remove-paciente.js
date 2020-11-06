
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
  // Event engloba a acão toda, target é onde ela ocorreu (td) e parentNode é o grupo (tr), ou seja: a linha
  event.target.parentNode.classList.add("fadeOut");

  setTimeout( function() {
    event.target.parentNode.remove();
  }, 1000);
});
