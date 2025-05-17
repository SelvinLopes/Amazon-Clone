//section I
let userscore = 0;
let compscore = 0;
let drawscore = 0;
let userchoice = "";
let compchoice = "";
let drawschoice = "";

const choices = document.querySelectorAll(".choice1");
var msg = document.getElementById("msg-text");/*✅ Use const by default.🔁 Use let if the value needs to change.🚫 Avoid var in modern JavaScript.*/


choices.forEach((choice1) =>{  //from every choices we take one choice each
    choice1.addEventListener("click",()=>{
        userchoice = choice1.getAttribute("id");
        console.log("choice: " , userchoice);

        
        generateComputerChoice();  //calls section II
        evaluateResult(); //calls section III
    });
});


//section II
let a = ["rock" , "paper" , "scissor"];
function generateComputerChoice(){
    let e = Math.random(); //always takes in zeros only => 0.43243455 or 0.978478343
    let f = e * 3; //will limit only till 3
    let g = Math.floor(f);
    compchoice = a[g];
    console.log("Computer choice:", compchoice);
}



//section III
function evaluateResult(){
    if (userchoice === compchoice) {
        drawscore++;
        msg.innerText = "It's a draw!";
    } else if (
        (userchoice === "paper" &&  compchoice === "rock") ||
        (userchoice === "scissor" &&  compchoice === "paper") ||
        (userchoice === "rock" &&  compchoice === "scissor")) {
        userscore++;
        msg.innerText = "You won this Game!";
    } else {
        compscore++;
        msg.innerText = "You lose, Try again..!";
    }
    document.getElementById("userscore").innerText = userscore;
    document.getElementById("compscore").innerText = compscore;
    document.getElementById("drawscore").innerText = drawscore;
}
