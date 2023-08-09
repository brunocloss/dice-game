// media querie para o container

const new_game_start = document.querySelector("#new_game_start") // new game button in first container
const rulesBtn = document.querySelector("#rules")
const rulesDiv = document.querySelector(".rules")
const closeBtn = document.querySelector("#close")

const player1 = document.querySelector(".player0")
const player2 = document.querySelector(".player1")

const roll = document.querySelector("#roll")
const btnNew = document.querySelector("#newBtn")
const hold = document.querySelector("#hold")
const dice = document.querySelector("#dice")

const score1 = document.querySelector("#score0")
const score2 = document.querySelector("#score1")
const current1 = document.querySelector("#current0")
const current2 = document.querySelector("#current1")

///////////////////////////////////////////////////

const dice_values = [0, "&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"]
let currentScore = 0
let scores = [0, 0]
let activePlayer = 0
let game = true
let points = 0

///////////////////////////////////////////////////

rulesBtn.addEventListener("click", () => {
    rulesDiv.classList.remove("hidden")
})

closeBtn.addEventListener("click", () => {
    rulesDiv.classList.add("hidden")
})

new_game_start.addEventListener("click", () => {
    document.querySelector(".start_container").classList.add("hidden")
    document.querySelector(".container").classList.remove("hidden")
    new_game()
})

///////////////////////////////////////////////////

//new_game()

roll.addEventListener("click", () => {

    if (game == true) {

        randomDice = Math.floor(Math.random() * 6) + 1;
        dice.classList.remove("hidden")
        dice.classList.add("roll-animation")

        setTimeout(() => {
            dice.classList.remove("roll-animation")
            dice.innerHTML = dice_values[randomDice]
            teste()
        }, 1000)

    }
})


hold.addEventListener("click", () => {

    if (game == true) {

       document.querySelector(`.player${activePlayer}`).classList.remove("active")
        scores[activePlayer] += currentScore
        document.querySelector(`#score${activePlayer}`).textContent = scores[activePlayer]

        win_check()
    }
})

btnNew.addEventListener("click", new_game)

////////////////////////////////////////////////////////////////////////////////

function teste() {

    //document.querySelector(`.player${activePlayer}`).classList.add("active")
    currentPlayer = document.querySelector(`#current${activePlayer}`)

    if (randomDice !== 1) {
        document.querySelector(`.player${activePlayer}`).classList.add("active")

        currentScore += randomDice
        currentPlayer.textContent = currentScore

    }
    else {
        document.querySelector(`#score${activePlayer}`).textContent = scores[activePlayer]
        document.querySelector(`.player${activePlayer}`).classList.remove("active")
        currentScore = 0

        win_check()
    }
}




function switch_player() {

    dice.classList.add("hidden")

    currentPlayer = document.querySelector(`#current${activePlayer}`)
    currentPlayer.textContent = 0

    if (activePlayer === 0) {
        activePlayer = 1
        document.querySelector(`.player${activePlayer}`).classList.add("active")
    }
    else {
        activePlayer = 0
        document.querySelector(`.player${activePlayer}`).classList.add("active")
    }
}


function win_check() {

    if (scores[activePlayer] >= 50) {
        document.querySelector(`.player${activePlayer}`).classList.remove("active")
        document.querySelector(`#score${activePlayer}`).textContent = "WINNER"
        document.querySelector(`.player${activePlayer}`).classList.add("winner")

        points = points + 1
        document.querySelector(`.total_wins${activePlayer}`).textContent = points

        dice.classList.add("hidden")
        hold.classList.add("hidden")
        roll.classList.add("hidden")
        hold.classList.add("hidden")
        game = false
    }
    else {
        currentScore = 0
        switch_player()
    }
}

function new_game() {
    
    game = true
    dice.classList.add("hidden")
    currentScore = 0
    scores = [0, 0]

    
    document.querySelector(`.player${activePlayer}`).classList.remove("winner")
    document.querySelector(".player0").classList.add("active")
    document.querySelector(".player1").classList.remove("active")

    roll.classList.remove("hidden")
    hold.classList.remove("hidden")

    score1.textContent = 0
    score2.textContent = 0
    current1.textContent = 0
    current2.textContent = 0

}