function Euros() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEuroNumerico = parseFloat(valor);
  
    var conversaoEuro = valorEmEuroNumerico * 6;
    console.log(conversaoEuro);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + conversaoEuro;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function Dolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var conversaoDolar = valorEmDolarNumerico * 5;
    console.log(conversaoDolar);
  
    var elementoValorConvertida = document.getElementById("valorConvertida");
    var valorConvertida = "O resultado em real é R$ " + conversaoDolar;
    elementoValorConvertida.innerHTML = valorConvertida;
  }
  