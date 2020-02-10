//Variables
var pos = 0;
var test;
var testStatus;
var question;
var choice;
var choices = document.getElementsByName('choices');
var chA;
var chB;
var chC;
var chD;
var correct = 0;
var lastAnswerCorrect = false;
var testContainer;
var correctCounter;

//Array of Questions - Choices - Answers
var questions = [
    ['Who won the 2014 Super Bowl?', 'New England Patriots', 'Denver Broncos', 'Seattle Seahawks', 'Philidelphia Eagles', 'C'],
    ['Which baseball player is responsible for The Curse of the Bambino?', 'Shoeless Joe Jackson', 'Ty Cobb', 'Reggie Jackson', 'Babe Ruth', 'D'],
    ['Who is said to have invented baseball in Cooperstown, New York, in 1839?', 'Abner Doubleday', 'Bill Buckner', 'Ronald Johnston', 'Harold Banks', 'A'],
    ['Which basketball team has the most NBA championships in history?', 'LA Lakers', 'Chicago Bulls', 'Boston Celtics', 'San Antonio Spurs', 'C'],
    ['Who is the NBA Coach of the Year trophy named after?', 'Red Auerbach', 'John Wooden', 'Phil Jackson', 'Bear Bryant', 'A'],
    ['Who has the most PGA major wins in history?', 'Sam Snead', 'Tiger Woods', 'Jack Nicklaus', 'Arnold Palmer', 'C'],
    ['Which MLB player hit 20 or more homeruns in 20 seasons?', 'Hank Aaron', 'Babe Ruth', 'Mickey Mantle', 'Barry Bonds', 'A'],
    ['Who is the only basketball player to win championships in high school, college and the NBA and also to win an Olympic Gold Medal?', 'Larry Bird', 'Michael Jordon', 'Magic Johnson', 'Isiah Thomas', 'C'],
    ['Which MLB player is known as the Iron Man, playing in 2,632 consecutive games?', 'Peyton Manning', 'Cal Ripken Jr.', 'Hank Aaron', 'Dave Erickson', 'B'],
    ['What pitcher has lost the most games in MLB history?', 'Phil Niekro', 'Cy Young', 'Nolan Ryan', 'Walter Johnson', 'B']
];

//Render Questions
function renderQuestion(){
    testStatus = document.getElementById('test_status');
    correctCounter = document.getElementById('correct_counter');
    test = document.getElementById('test');
    
    //Stop Quiz at End & Display Score
    if(pos >= questions.length){
        testStatus.innerHTML = 'Test Completed';
        correctCounter.innerHTML = '';
        test.innerHTML = '<br><h3>You got '+correct+' questions out of '+questions.length+' correct</h3><br>';
        test.innerHTML += '<br><button onclick="resetTest()" id="reset_quiz_btn" class="reset-quiz-btn">Try Again</button>';
        return false;
    }
     
    //Heading Info Elements
    testStatus.innerHTML = 'Question '+(pos+1)+' of '+questions.length;
    correctCounter.innerHTML = 'Correct Answers: '+correct;
    
    
    //Find Question in Array
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    
    //Render Question on Page
    test.innerHTML = '<h3 id="test_question" class="test-question">'+question+'</h3>';
    test.innerHTML += '<label><input type="radio" name="choices" value="A">'+chA+'</label><br>';
    test.innerHTML += '<label><input type="radio" name="choices" value="B">'+chB+'</label><br>';
    test.innerHTML += '<label><input type="radio" name="choices" value="C">'+chC+'</label><br>';
    test.innerHTML += '<label><input type="radio" name="choices" value="D">'+chD+'</label><br>';
    test.innerHTML += '<input onclick="checkAnswer()" class="button-spacing" type="submit" value="Submit">';
    
    //Plus One Animation
    if(lastAnswerCorrect) { 
        test.innerHTML += '<span class="plus-one">+1</span>'
    }
}

//Grade Answer
function checkAnswer() {
    for(i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    //Check if Correct Answer
    if(choice == questions[pos][5]){
        lastAnswerCorrect = true;
        correct++
    } else {
        lastAnswerCorrect = false;
    }
    //Continue to Next Question
    pos++
    renderQuestion();
}

//Reset Quiz
function resetTest(){
    correct = 0;
    pos = 0;
    lastAnswerCorrect = false;
    renderQuestion();
}

//Load After Everything Is Finished
window.addEventListener('load', renderQuestion, false);


//Media Queries  -- Responsive
var testContainerElement = document.getElementById('test_container');
var correctCounterElement = document.getElementById('correct_counter');
var testElement = document.getElementById('test');
var applicationContainerElement = document.getElementById('application_container');

function responsiveQuiz(x) {
    if (x.matches) { // If media query matches
        testContainerElement.style.width = "90%";
        correctCounterElement.style.display = "none";
        testElement.style.fontSize = "21px";
        testElement.style.paddingLeft = "0px";
    } else {
        applicationContainerElement.style.marginTop = "35px";
    }
}

var x = window.matchMedia("(max-width: 500px)")
responsiveQuiz(x) // Call listener function at run time
x.addListener(responsiveQuiz) // Attach listener function on state changes