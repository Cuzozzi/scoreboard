const homeScore = document.getElementById("home-score")
const awayScore = document.getElementById("away-score")
const timerMinutes = document.getElementById("timer-minutes")
const timerSeconds = document.getElementById("timer-seconds")
let timeStart = document.getElementById("timer-start")
let intervalID = null

const h1Btn = document.getElementById("h1-btn")
const h2Btn = document.getElementById("h2-btn")
const h3Btn = document.getElementById("h3-btn")
const a1Btn = document.getElementById("a1-btn")
const a2Btn = document.getElementById("a2-btn")
const a3Btn = document.getElementById("a3-btn")

h1Btn.addEventListener("click", () => {
    if (homeScore.value < 99) {
        homeScore.value = Number(homeScore.value) + 1
        leader()
    }
})

h2Btn.addEventListener("click", function() {
    if (homeScore.value < 98) {
        homeScore.value = Number(homeScore.value) + 2
        leader()
    }
})

h3Btn.addEventListener("click", function() {
    if (homeScore.value < 97) {
        homeScore.value = Number(homeScore.value) + 3
        leader()
    }
})

a1Btn.addEventListener("click", function() {
    if (awayScore.value < 99) {
        awayScore.value = Number(awayScore.value) + 1
        leader()
    }
})

a2Btn.addEventListener("click", function() {
    if (awayScore.value < 98) {
        awayScore.value = Number(awayScore.value) + 2
        leader()
    }
})

a3Btn.addEventListener("click", function() {
    if (awayScore.value < 97) {
        awayScore.value = Number(awayScore.value) + 3
        leader()
    }
})

function timerStart() {
    timerMinutes.value = 89
    timerSeconds.value = 59
    console.log(timerMinutes)
    intervalID = setInterval(timerUpdate, 1000)
}

function leader() {
    if (homeScore.value > awayScore.value) {
        homeScore.classList.add("timer-box-leader")
        homeScore.classList.remove("timer-box-loser")
        awayScore.classList.add("timer-box-loser")
        awayScore.classList.remove("timer-box-leader")
    } else if (homeScore.value === awayScore.value) {
        homeScore.classList.remove("timer-box-leader")
        homeScore.classList.remove("timer-box-loser")
        awayScore.classList.remove("timer-box-loser")
        awayScore.classList.remove("timer-box-leader")
    } else {
        homeScore.classList.remove("timer-box-leader")
        homeScore.classList.add("timer-box-loser")
        awayScore.classList.remove("timer-box-loser")
        awayScore.classList.add("timer-box-leader")
    }
}

function timerUpdate() {
    if (timerMinutes.value >= 00 && timerSeconds.value > 00) {
        timerSeconds.value -= 1
    } else if (timerMinutes.value > 00 && timerSeconds.value == 0) {
        timerMinutes.value -= 1
        timerSeconds.value = 59
    } else {
        clearInterval(intervalID)
    }
}

function reset() {
    homeScore.value = 0
    awayScore.value = 0
    timerMinutes.value = 0
    timerSeconds.value = 0
    clearInterval(intervalID)
}

