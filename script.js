let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highScore = 0
let labelScore = document.querySelector(".score");
let checkBtn = document.querySelector(".check");
let message = document.querySelector(".message");
let numberElement = document.querySelector(".number");

console.log('sec inoutside', secretNumber)

function numberValues(text){
    if (score < 1) {
        message.textContent = "You lost";
        return;
    }
    message.textContent = text;
    score--;
    labelScore.textContent = score;
}

checkBtn.addEventListener("click", function () {
    // console.log("Check btn clicked", secretNumber);
    let inputValue = Number(document.querySelector(".guess").value);

    console.log("inputValue", typeof inputValue, inputValue);
    if (!inputValue) {
        message.textContent = "No Number Provided";
    } else if (inputValue === secretNumber) {
        message.textContent = "Correct NumBer";
        numberElement.textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        numberElement.style.width = "30rem";
        document.querySelector('.highscore').textContent = score

    } else if (inputValue > secretNumber) {
        numberValues("too high")
    } 
    numberValues("too small")
    });

    
document.querySelector(".again").addEventListener("click", function () {
    let inputValue = Number(document.querySelector(".guess").value = 0);
    console.log('inp', inputValue)
    document.querySelector("body").style.backgroundColor = "#333 ";
    numberElement.style.width = "15rem";
    numberElement.textContent = "?";
    score = 20
    labelScore.textContent = 20;
});


document.querySelector(".new-game").addEventListener("click", function () {
    const inputValue = Number(document.querySelector(".guess").value);
    secretNumber = Math.trunc(Math.random() * 50) + 1;
    console.log('sec inside', secretNumber)
        document.querySelector(".guess").value = "";
        document.querySelector("body").style.backgroundColor = "#333";
        document.querySelector(".number").textContent = "?";
        numberElement.style.width = "30rem";
        document.querySelector('.highscore').textContent = score
    score = 20
    labelScore.textContent = 20;

});
