var screen = document.getElementById('screen');


function btnClick(value){ // this function dispaly the value on screen.
    screen.value += value;
}

function clrScreen(){ // this function clear the screen.
    screen.value = ""
}

function showAnswer(){ // this function show answer when we click the sign '='.
    var Answer = eval(screen.value) // it evaluate the values 
    screen.value = Answer
    // 
}