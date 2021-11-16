var computerCard
var playerCard

var cards = [
  (card1 = {
    name: 'Optimus prime',
    image:
      'https://i.pinimg.com/originals/d0/f6/a6/d0f6a6d6e9c30afbc813ffcd2340c66d.jpg',
    attributes: {
      power: 10,
      speed: 7,
      atack: 9
    }
  }),
  (card2 = {
    name: 'Bumblebee',
    image: 'https://i.redd.it/i1pr7p114ts41.jpg',
    attributes: {
      power: 7,
      speed: 10,
      atack: 8
    }
  }),
  (card3 = {
    name: 'Megatron',
    image:
      'http://pm1.narvii.com/6475/2156afaf39348b3be6bd4f305e08daf1826dfad5_00.jpg',
    attributes: {
      power: 7,
      speed: 5,
      atack: 10
    }
  })
]

function sortearCarta() {
  var computerCardNumber = parseInt(Math.random() * cards.length)
  computerCard = cards[computerCardNumber]

  var playerCardNumber = parseInt(Math.random() * cards.length)
  while (playerCardNumber == computerCardNumber) {
    playerCardNumber = parseInt(Math.random() * cards.length)
  }
  playerCard = cards[playerCardNumber]
  console.log(playerCard)
  console.log(computerCard)

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  showPlayerCard()
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
  var divResult = document.getElementById('resultado')
  var htmlResult

  var playerCardValue = playerCard.attributes[selectedAttribute]
  var computerCardValue = computerCard.attributes[selectedAttribute]

  if (playerCardValue > computerCardValue) {
    htmlResult = "<p class='resultado-final'>Venceu!</p>"
  } else if (playerCardValue < computerCardValue) {
    htlmResult = "<p class='resultado-final'>Perdeu :/</p>"
  } else {
    htmlResult = "<p class='resultado-final'>Empatou...</p>"
  }
  divResult.innerHTML = htmlResult
  document.getElementById('btnJogar').disabled = true
  showComputerCard()
}

function showPlayerCard() {
  var divPlayerCard = document.getElementById('carta-jogador')
  divPlayerCard.style.backgroundImage = `url(${playerCard.image})`

  var frame =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  var textOptions = ''
  for (var attribute in playerCard.attributes) {
    textOptions +=
      "<input type='radio' name='attribute' value='" +
      attribute +
      "'>" +
      attribute +
      ' ' +
      playerCard.attributes[attribute] +
      '<br>'
  }
  var name = `<p class="carta-subtitle">${playerCard.name}</p>`

  divPlayerCard.innerHTML = frame + name + tagHTML + textOptions + '</div>'
}

function showComputerCard() {
  var divComputerCard = document.getElementById('carta-maquina')
  divComputerCard.style.backgroundImage = `url(${computerCard.image})`

  var frame =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  var textOptions = ''
  for (var attribute in computerCard.attributes) {
    textOptions +=
      "<p type='text' name='attribute' value='" +
      attribute +
      "'>" +
      attribute +
      ' ' +
      computerCard.attributes[attribute] +
      '</p>'
  }
  var name = `<p class="carta-subtitle">${computerCard.name}</p>`

  divComputerCard.innerHTML = frame + name + tagHTML + textOptions + '</div>'
}
