let userName = prompt("Welcome to GC mini-golf! What is your name?");
let score = 0;

holesPrompt();

function getScores(holes) {
    for (let i = 1; i <= holes; i++) {
        let par = parseInt(prompt("How many putts for hole " + i + "? (par is 3)"));
        score += par;
    }
    tabulateScore(score, holes);
}
function holesPrompt() {
    let holes = parseInt(prompt("Hi, " + userName + "! Would you like to play 3 or 6 holes today?"));
    holeCheck(holes);
}
function holeCheck(holes) {
    if (holes === 3 || holes === 6) {
        getScores(holes);
    } else {
        confirm("You must choose either 3 or 6 holes!");
        holesPrompt();

    }
}
function tabulateScore(score, holes) {
    let totalPar = 3 * holes;
    let totalScore = score - totalPar;
    if (score > totalPar) {
        console.log('Nice try, ' + userName + '... Your total par was: +' + totalScore);
    }
    if (score < totalPar) {
        console.log('Great Job ' + userName + '! Your total par was: ' + totalScore);
    }
    if (score === totalPar) {
        console.log('Good game ' + userName + '. Your total par was: 0.');
    }
}

