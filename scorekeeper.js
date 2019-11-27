var button1 = document.getElementById("first");
var button2 = document.getElementById("second");
var button3 = document.getElementById("reset");
var score1 = document.getElementById("prim");
var score2 = document.getElementById("sec");
var numInput = document.querySelector("input");
var maxScore = document.querySelector("#max");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

button1.addEventListener ("click", function() {
    if (!gameOver) {
        p1score++;
        if (p1score === winningScore) {
            score1.classList.add("winner");
            gameOver = true;
        }
        score1.textContent = p1score;
    }
    // if (p1score === 5) {
    // score1.style.textDecorationColor = "green";
    // }
});

button2.addEventListener ("click", function() {
    if (!gameOver) {
        p2score++;
        if (p2score === winningScore) {
            score2.classList.add("winner");
            gameOver = true;
        }
    score2.textContent = p2score;
    }
    // if (p2score === 5) {
    // score2.style.textDecorationColor = "green";
    // }
});

button3.addEventListener ("click", function () {
    reset();
});

function reset () {
    p1score1 = 0;
    p2score2 = 0;
    score1.textContent = "0";
    score2.textContent = "0";
    score1.classList.remove("winner");
    score2.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("input", function () {
    maxScore.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
})