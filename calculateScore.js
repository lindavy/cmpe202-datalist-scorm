// quiz results
var math_question = "option1"; 
var cosine = "option2"; 
var english_sco = ["option1", "option7"]; 
var audio_video = "option4"; 
var questions_answered = 0; 
var total_questions = 4; 

console.log("from js script!!")

function markResults(answer, question)
{ 
    if (answer)
    {
        // mark result
        var scoreSheet = JSON.parse(localStorage.getItem('scoreSheet')); 
        scoreSheet[question] = true; 
        localStorage.setItem("scoreSheet", JSON.stringify(scoreSheet)); 
        // console.log(question, " is marked correct!"); 
        console.log(scoreSheet); 

        // tally score by typecasting to Integer
        // var score = localStorage.getItem("score"); 
        // score = parseInt(score) + 1;
        // localStorage.setItem("score", score);  
        // alert("your new score is " + score); 

        // tally score by using JSON
        var score = JSON.parse(localStorage.getItem("score"));
        score += 1; 
        localStorage.setItem("score", JSON.stringify(score)); 
    }
    alert("your score is " + JSON.parse(localStorage.getItem("score"))); 
    
} 
