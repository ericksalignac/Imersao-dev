var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);
var contador = 1;

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute === numeroSecreto) {
    resultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Escolha um número de 0 a 10";
  }
  if (chute < numeroSecreto) {
    resultado.innerHTML = "Você errou! Tente chutar mais alto na próxima";
  } else if (chute > numeroSecreto) {
    resultado.innerHTML = "Você errou! Tente chutar mais baixo na próxima";
  } else {
    resultado.innerHTML = "Você acertou!";
  }
}
