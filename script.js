

var you;
var playerScore = 0;
var computer;
var computerScore = 0;

var choices = ["rock","paper","scissors","lizard","spock"];

window.onload = function() {
    for (let i = 0; i < 5; i++){
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice () {
    you = this.id;
    document.getElementById("player-choice").src = you + ".png";
}