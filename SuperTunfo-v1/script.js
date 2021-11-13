var card1 = {
  name: 'Optimus prime',
  attributes: {
    power: 10,
    speed: 8,
    atack: 9
  }
}
var card2 = {
  name: 'Bumblebee',
  attributes: {
    power: 7,
    speed: 10,
    atack: 8
  }
}
var card3 = {
  name: 'Megatron',
  attributes: {
    power: 7,
    speed: 5,
    atack: 10
  }
}
var cards = [card1, card2, card3]

var computerCard
var playerCard

function sortearCarta() {
  var computerCardNumber = parseInt(Math.random() * cards.length)
  computerCard = cards[computerCardNumber]

  var playerCardNumber = parseInt(Math.random() * cards.length)
  while (playerCardNumber == computerCardNumber) {
    numberPlayerCard = parseInt(Math.random() * cards.length)
  }
  playerCard = cards[playerCardNumber]
  console.log(playerCard)

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ''

  for (var attribute in playerCard.attributes) {
    opcoesTexto +=
      "<input type='radio' name='attribute' value='" +
      attribute +
      "'>" +
      attribute
  }
  opcoes.innerHTML = opcoesTexto
}

function getSelectedAttribute() {
  var radioAttributes = document.getElementsByName('attribute')

  for (var i = 0; i < radioAttributes.length; i++) {
    if (radioAttributes[i].checked == true) {
      return radioAttributes[i].value
    }
  }
}

function jogar() {
  var selectedAttribute = getSelectedAttribute()
  var resultElement = document.getElementById('resultado')

  var playerCardValue = playerCard.attributes[selectedAttribute]
  var computerCardValue = computerCard.attributes[selectedAttribute]

  if (playerCardValue > computerCardValue) {
    resultElement.innerHTML = 'Você venceu!'
  } else if (playerCardValue < computerCardValue) {
    resultElement.innerHTML = 'Você perdeu :/'
  } else {
    resultElement.innerHTML = 'Empatou...'
  }
  console.log(computerCard)
}
