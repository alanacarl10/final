

var count = 300;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
		alert("Quiz is over!")
		document.getElementById("quiz").style.visibility = "hidden";
	



	}
	
	if (count ==150){
		alert("Keep up!");


	}
}, 1000);

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;

	var correct = 0;
	

	if (question1 == "HyperText Markup Language") {
		correct++;
}
	if (question2 == "Cascading Style Sheets") {
		correct++;
}	
	if (question3 == "false") {
		correct++;
	}

	if (question4 == "git add .") {
		correct++;
	}

	if (question5 == "git commit -m") {
		correct++;
	}

	if (question6 == "CSS") {
		correct++;
	}

	if (question7 == "HTML") {
		correct++;
	}

	if (question8 == "Create, Read, Update, Destroy") {
		correct++;
	}

	if (question9 == "an example of something that follows the blueprint of the class") {
		correct++;
	}

	if (question10 == "a blueprint that defines important aspects of the object.") {
		correct++;
	}
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "Not that bad!", "Not good, not good at all"];
	var score;

	if (correct == 0 && correct < 3) {
		score = 2;
	}


	if (correct > 3 && correct < 7) {
		score = 1;
	}

	if (correct < 8) {
		score = 0;
	}

	


	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
