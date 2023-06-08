

var player;
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
};

function selectChoice(){
    player = this.id;
    document.getElementById("player-choice").src = player +".png";

    computer = choices[Math.floor(Math.random() * 5)];
    document.getElementById("computer-choice").src = computer + ".png";

    if(player == computer){
        playerScore +=0;
        computerScore +=0;
    }

    else{
        if(player == "rock"){
            if (computer == "scissors"){
                playerScore +=1;
            }
            else if ( computer == "paper"){
                computerScore +=1;
            }
        }
        else if(player == "rock"){
            if (computer == "lizard"){
                playerScore +=1;
            }
            else if ( computer == "spock"){
                computerScore +=1;
            }
        }
        else if(player == "paper"){
            if (computer == "rock"){
                playerScore +=1;
            }
            else if ( computer == "scissors"){
                computerScore +=1;
            }
        }
        else if(player == "paper"){
            if (computer == "spock"){
                playerScore +=1;
            }
            else if ( computer == "lizard"){
                computerScore +=1;
            }
        }
        else if(player == "scissors"){
            if (computer == "paper"){
                playerScore +=1;
            }
            else if ( computer == "rock"){
                computerScore +=1;
            }
        }
        else if(player == "scissors"){
            if (computer == "lizard"){
                playerScore +=1;
            }
            else if ( computer == "spock"){
                computerScore +=1;
            }
        }
        else if(player == "lizard"){
            if (computer == "paper"){
                playerScore +=1;
            }
            else if ( computer == "rock"){
                computerScore +=1;
            }
        }
        else if(player == "lizard"){
            if (computer == "spock"){
                playerScore +=1;
            }
            else if ( computer == "scissors"){
                computerScore +=1;
            }
        }
        else if(player == "spock"){
            if (computer == "scissors"){
                playerScore +=1;
            }
            else if ( computer == "paper"){
                computerScore +=1;
            }
        }
        else if(player == "spock"){
            if (computer == "rock"){
                playerScore +=1;
            }
            else if ( computer == "lizard"){
                computerScore +=1;
            }
        }
    }

   document.getElementById("player-score").innerText = playerScore;
   document.getElementById("computer-score").innerText = computerScore;
}
