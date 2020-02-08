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
    ['Which popular junk food was invented in Chicago?', 'Twinkie', 'Cheese Puffs', 'Moon Pie', 'Pork Rinds', 'A'],
    ['What is the name of Chicago\'s tallest building?', 'Sears Tower', 'John Hancock', 'Trump Tower', 'Willis Tower', 'D'],
    ['What is the famous mile stetch down Lake Shore Drive called?', 'Marvelous Mile', 'Magnificent Mile', 'Miraculous Mile', 'Lake Shore Mile', 'B'],
    ['How many miles of public beach does Chicago lay claim to?', '2', '5', '8', '26', 'D'],
    ['What is Chicago\'s public rail transit called?', 'L', 'R', 'Subway', 'Underground Railway', 'A'],
    ['Chicago is home to one of the world\'s last free zoos. What is its name?', 'Brookfield Zoo', 'Bronx Zoo', 'Lincoln Park Zoo', 'Chicago Zoo', 'C'],
    ['The Chicago Field Museum owns the world\'s most complete T-rex skeleton. What is its name?', 'Stan', 'AMNH 5027', 'Sue', 'Jane', 'C'],
    ['Allegedly the Chicago fire began when a cow knocked over a latern. What was the name of the owner of the cow?', 'Mr. Greene', 'Ms. O\'Leary', 'Ms. O\'Brien', 'Mr. Atcus', 'B'],
    ['How many parks does Chicago have?', '352', '452', '552', '652', 'C'],
    ['Which famous person was born in Chicago?', 'Walt Disney', 'Jim Brown', 'Alan Greenspan', 'Dick Van Dyke', 'A']
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

function myFunction(x) {
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
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes