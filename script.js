const playerScoreLabel = document.getElementById("player")
const botScoreLabel = document.getElementById("bot")
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const eventLabel = document.getElementById("event")
const restartBtn = document.getElementById('restart')

let pscore = 0
let bscore = 0

function disableBtns() {
    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true
}

function getBotOption() {
    let botOption = Math.random()
    botOption = Math.round(botOption)
    if (botOption === 0 ) {
        return 'r'
    } else if (botOption === 1) {
        botOption = Math.random()
        botOption = Math.round(botOption)
        if (botOption === 0) {
            return 'p'
        } else {
            return "s"
        }
    }
}

restartBtn.addEventListener('click', () => {
    pscore = 0
    bscore = 0
    playerScoreLabel.textContent = "Player: " +pscore
    botScoreLabel.textContent = "Bot: " +bscore
    restartBtn.hidden = true
    scissorsBtn.disabled = false
    paperBtn.disabled = false
    rockBtn.disabled = false
})

rockBtn.addEventListener("click", () => {
    let bot = getBotOption()
    if (bot === "r") {
        eventLabel.textContent = "It's a draw!"
    } else if (bot === 's') {
        eventLabel.textContent = "Player destroys Bot scissors!"
        pscore++
        playerScoreLabel.textContent = "Player: " +pscore
    } else if (bot === "p") {
        eventLabel.textContent = "Player got stuck with Bot paper!"
        bscore++
        botScoreLabel.textContent = "Bot: " +bscore
    }

    if (pscore === 5) {
        eventLabel.textContent = "Player won!"
        restartBtn.hidden = false
        disableBtns()
    } else if (bscore === 5) {
        eventLabel.textContent = "Bot won!"
        restartBtn.hidden = false
        disableBtns()
    }
})

paperBtn.addEventListener("click", () => {
    let bot = getBotOption()
    if (bot === "r") {
        eventLabel.textContent = "Bot rock is stuck in Player paper"
        pscore++
        playerScoreLabel.textContent = "Player: " +pscore
    } else if (bot === 's') {
        eventLabel.textContent = "Bot cut Player paper"
        bscore++
        botScoreLabel.textContent = "Bot: " +bscore
    } else if (bot === "p") {
        eventLabel.textContent = "It's a draw!"
    }

    if (pscore === 5) {
        eventLabel.textContent = "Player won!"
        restartBtn.hidden = false
        disableBtns()
    } else if (bscore === 5) {
        eventLabel.textContent = "Bot won!"
        restartBtn.hidden = false
        disableBtns()
    }
})

scissorsBtn.addEventListener("click", () => {
    let bot = getBotOption()
    if (bot === "r") {
        eventLabel.textContent = "Bot destroyed Player scissors"
        bscore++
        botScoreLabel.textContent = "Bot: " +bscore

    } else if (bot === 's') {
        eventLabel.textContent = "It's a draw!"

    } else if (bot === "p") {
        eventLabel.textContent = "Player cut Bot paper"
        pscore++
        playerScoreLabel.textContent = "Player: " +pscore
    }

    if (pscore === 5) {
        eventLabel.textContent = "Player won!"
        restartBtn.hidden = false
        disableBtns()
    } else if (bscore === 5) {
        eventLabel.textContent = "Bot won!"
        restartBtn.hidden = false
        disableBtns()
    }
})