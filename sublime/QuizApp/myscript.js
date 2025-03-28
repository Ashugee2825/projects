var questions =[{
	question: "what is the baby of a Moth known as?",
	choices: ["baby ","infant","kit","larva"],
	correctAnswer: 3	
},{
	question: "what is the adult of a kid called?",
	choices: ["calf" ,"doe","goat","chick"],
	correctAnswer: 2	
},{
	question: "what is the young of Bufallo called?",
	choices: ["baby" ,"calf","pup","cow"],
	correctAnswer: 0	
},{
	question: "what a baby Aligator Called?",
	choices: ["baby" ,"gator","hactching","calf"],
	correctAnswer: 2	
}, {
	question: "What is a baby Goose called?",
	choices: ["gooser" ,"gosling","gup","pup"],
	correctAnswer: 1
},{
	question: "What is a baby Hamster called?",
	choices: ["pup" ,"chick","infant","billy"],
	correctAnswer: 0
},{
	question: "What is a baby Hawk called?",
	choices: ["hawklett" ,"pup","larva","eyas"],
	correctAnswer: 3
},{
	question: "What is a baby grasshopper called?",
	choices: ["hopper" ,"nymph","stick","pup"],
	correctAnswer: 1
},{ 
	question: "What is a baby Kangaroo called?",
	choices: ["kinga" ,"joey","calf","baby"],
	correctAnswer: 1
},{
	question: "What is a baby whale called?",
	choices: ["whala" ,"cub","grup","infant"],
	correctAnswer: 1
},{
	question: "What is a baby Monkey called?",
	choices: ["infant" ,"baby","calf","pup"],
	correctAnswer: 0
},{
	question: "What is a baby Bear called?",
	choices: ["kinga" ,"joey","calf","baby"],
	correctAnswer: 0
}];





var currentQuestion =0;
var correctAnswers =0;
var quizOver = false;

$(document).ready(function () {
	displayCurrrntQuestion();
	$(this).find(".quizMessage").hide();
	$(this).find(".nextButton").on("click",function() {
		if(!quizOver) {
			value =$("input[type='radio']:checked").val();
			if (value == underfined) {
				$(document).find(".quizMessage").text("Please select an Answer");
				$(document).find("quizMessage").show();
			}else {
				$(document).find("quizMessage").hide();
				if (value == question[currentQuestion].correctAnswer) {
					correctAnswers++
				}
				currentQuestion++;
				if (currentQuestion < question.length) {
					displayCurrrntQuestion();
				} else {
					displayScore();
					$(document).find(".nextButton").text("Play Again");
					quizOver =true;
				}
			}
	}
	 else {
	 	quizOver =false;
	 	$(document).find(".nextButton").text("Next Question");
	 	resetQuiz();
	 	displayCurrrntQuestion();
	 	hideScore();
	 }
	});
});
function displayCurrrntQuestion() {

	console.log("In display current Question");

	var questions = question[currentQuestion].question;
	var questionClass = $(document)find("quizContainer > .question");
	var choiceList = $(document).find("quizContainer > .choiceslist");
	var numChoices = questions[currentQuestion].choices.length;

	$(questionClass).text(question);

	$(choiceList).find("li").remove();

	var choice;
    for (i =0; i < numChoices; i++) { 
    	choices = questions[currentQuestion].choices.[i];
    	$('<li><input type= "radio" value= ' +i+ 'name="dynradio" />' + choice + '</li>').appendTo(choiceList);

    
    }
function resetQuiz() {
	currentQuestion =0;
	correctAnswer = 0; 
	hideScore();

}
function displayScore() {
	$(document).find(".quizContainer  > result" ).text("You scored: "+ correctAnswer + " out of: " + question.length);
    $(document).find(".quizContainer  > result" ).show();
	
}
function hideScore() {
	$(document).find(",result").hide();
}