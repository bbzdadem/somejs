

function yeartodays() {
    let years = prompt("Enter your age: ")
    if (years == ""){
        return alert("No age entered")
    } else {
        return document.getElementById("answer").innerHTML = "You are" + years*365 + " days old";
    }
}

function resetdays() {
    return document.getElementById("answer").remove();
}
//----------------------------------------------
function generatecat() {
    let div = document.getElementById("containerchild");
    let img = document.createElement('img');
    img.src = "https://avatars3.githubusercontent.com/u/46882889?s=460&u=d5352e58020c17db3b01a0fa1a02182c8b989171&v=4";
    div.appendChild(img); 
}
//----------------------------------------------
function rpsGame(yourchoice) {
    var human, robot;
    robot = numberChoice(random());
    human = yourchoice.id;
    results = decideWinner(human, robot);
    message = finalMessage(results);
    rpsFront(human, robot,  message);
} 

function random() {
    return Math.floor(Math.random()*3);
}

function numberChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(human, robot) {
    var rpsData = {
        'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper' : {'scissors': 0, 'rock': 1, 'paper': 0.5 },
        'scissors' : {'scissors': 0.5, 'rock': 0, 'paper': 1 }
    }
    var yourscore = rpsData[human][robot];
    var robotscore = rpsData[robot][human];

    return [yourscore, robotscore]

}

function finalMessage([human, robot]) {
    if(human===0){
        return {'message': 'You lost!', 'color' : 'red' }
    }else if (human === 1) {
        return {'message': 'You won!', 'color' : 'green' }
    }else {
        return {'message': 'You tied!', 'color' : 'orange' }
    }
}

function rpsFront(humanImg, robotImg, finalMessage) {
    var imageData = {
        'rock' : document.getElementById("rock").src,
        'paper' : document.getElementById("paper").src,
        'scissors' : document.getElementById("scissors").src
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageData[humanImg] + "' class='images' >" ;
    botDiv.innerHTML = "<img src='" + imageData[robotImg] + "' class='images' >"  ;
    messageDiv.innerHTML = "<h2 style='color: " +finalMessage['color'] + "'>" + finalMessage['message'] + "</h2>"  ;

    document.getElementById('resultdiv').appendChild(humanDiv);
    document.getElementById('resultdiv').appendChild(messageDiv);
    document.getElementById('resultdiv').appendChild(botDiv);
}