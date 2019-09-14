//window.onload = init;

var words = [
    'breathe',
    'able',
    'abrupt',
    'stop',
    'bottle',
    'tail',
    'utter',
    'snotty',
    'fine',
    'teaching',
    'guide',
    'stick',
    'tour',
    'icy',
    'incandescent',
    'vengeful',
    'bore',
    'spare',
    'unbecoming',
    'agree',
    'unable',
    'apathetic',
    'sigh',
    'tip',
    'sky',
    'educated',
    'train',
    'example',
    'earthquake',
    'strap',
    'decorous',
    'foot',
    'hapless',
    'applaud',
    'substantial',
    'spotless',
    'spurious',
    'safe',
    'lace',
    'girl',
    'flight',
    'concerned',
    'oranges',
    'dislike',
    'excite',
    'sturdy',
    'head',
    'command',
    'angle',
    'ink',

]

var score = 0;
var timeLeft = 0;
var defaultTime = 7;
var timer = "" //setInterval(countDown, 100);
var wordToType = "";
var maxTime = defaultTime;

function randomWord() {
    wordToType = words[Math.floor(Math.random() * words.length)];
    document.getElementById('wordToType').innerHTML = wordToType;
}

function countDown() {
    if (timeLeft <= 0) {
        youLose();
    }
    else {
        timeLeft -= .1;
        timeLeft = timeLeft.toFixed(1);
        document.getElementById('timer').innerHTML = timeLeft + "s";
    }
}

function youLose() {
    alert("Game over!\n\nFinal Score: " + score + "\n\nMax Time: " + maxTime + "s")
    score = 0;
    init();
}

document.getElementById('play').addEventListener('click', function () {
    document.getElementById('instructions').setAttribute('style', "display: none;");
    document.getElementById('game').setAttribute('style', "display: initial;");
    timer = setInterval(countDown, 100);
    init();
})

function init() {
    randomWord();
    timeLeft = defaultTime;
    document.getElementById('score').innerHTML = score;
    document.getElementById('timer').innerHTML = timeLeft + "s";
    document.getElementById('input').addEventListener('change', function () {
        if (input.value == wordToType) {
            document.getElementById('wordToType').setAttribute('style', "background-color: #00ff00;")
            setInterval(function () {
                document.getElementById('wordToType').setAttribute('style', "background-color: #ffffff;")
            }, 300)
            score++;
            timeLeft++;
            timeLeft++;
            if (timeLeft > maxTime) {
                maxTime = timeLeft;
            }
            randomWord();
        } else {
            document.getElementById('wordToType').setAttribute('style', "background-color: #ff0000;")
            setInterval(function () {
                document.getElementById('wordToType').setAttribute('style', "background-color: #ffffff;")
            }, 300)
        }
        document.getElementById('score').innerHTML = score;
        input.value = "";
    })

    countDown();
}