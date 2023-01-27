let player={
    name :"Maher",
    chips: 10
}

let cards = [];
let message = "";
let isAlive = false;
let isBlackJack = false;
let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let messageEl = document.getElementById("message");
let drawBtn = document.getElementById("drawBtn");
let startBtn = document.getElementById("startBtn");
let playerInfo = document.getElementById("playerInfo")

drawBtn.style.display = "none";

function getRandomNum() {
  let randomCard = Math.floor(Math.random() * 13) + 1

  if (randomCard > 10) {
    randomCard = 10;
  } else if (randomCard === 1) {
    randomCard = 11;
  }
  return randomCard
}

function startGame() {
    playerInfo.textContent= player.name + ": $" + player.chips

  isAlive = true
  isBlackJack=false

//   startBtn.disabled = true
//   startBtn.classList.add("dis-btn")

  drawBtn.style.display = "inline-block"
  drawBtn.disabled = false

  cards = [getRandomNum(), getRandomNum()]

  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards:"
  let sum = 0

  drawBtn.classList.remove("dis-btn");
  drawBtn.disabled = false

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
    sum = cards[i] + sum
  }

 
//   for (let i = 0; i < cards.length; i++) {
//     sum = cards[i] + sum;
//   }

  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    isBlackJack = true
    cards = []

    drawBtn.classList.add("dis-btn")
    drawBtn.disabled = true

    // startBtn.classList.remove("dis-btn")
    // startBtn.disabled = false
    player.chips+=40
  } else {
    message = "You're out of the game!"
    isAlive = false
    cards = []

    drawBtn.classList.add("dis-btn")
    drawBtn.disabled = true

    // startBtn.classList.remove("dis-btn")
    // startBtn.disabled = false
    player.chips-=5
  }

  messageEl.textContent = message
  sumEl.textContent = "sum :" + sum
}

function newCard() {
  if (isAlive && !isBlackJack) {
    let card = getRandomNum()
    sum += card
    cards.push(card)
    renderGame()
  }
}

