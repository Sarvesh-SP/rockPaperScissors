let userScore = 0;
let computerScore = 0;
const userspan = document.getElementById("user-score");
const compspan = document.getElementById("comp-score");
const scoreboardspan = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById('p');
const scissors = document.getElementById('s');


function word(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissor";
}
function win(uc, cc){
  userScore++;
  userspan.innerHTML = userScore;
  compspan.innerHTML = computerScore;
  result.innerHTML = `${word(uc)} beats ${word(cc)}.You win!`;

}
function lose(uc, cc){
  computerScore++;
  userspan.innerHTML = userScore;
  compspan.innerHTML = computerScore;
  result.innerHTML = `${word(cc)} beats ${word(uc)}.You Lose!`;

}
function draw(){
  result.innerHTML = `Its a Draw!`;

}



function getCompChoice() {
  const choices = ['r', 'p', 's'];
  ran = Math.floor(Math.random()*3);
  return choices[ran];
}
function game(ch) {
  const compchoice = getCompChoice();
  switch(ch + compchoice){
    case 'rs':
    case 'pr':
    case 'sp':
      win(ch, compchoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(ch, compchoice);
      break;
    default:
      draw(ch, compchoice);
      break;
  }
}

function main() {
  rock.addEventListener('click', () => game("r"))
  paper.addEventListener('click', () => game("p"))
  scissors.addEventListener('click', () => game("s"))
}

main();