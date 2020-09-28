// quiz results
var math_question = "option1"; 
var cosine = "option2"; 
var english_sco = ["opt1", "opt3"]; 
var audio_video = "option4"; 
let score = 0;
var questions_answered = 0; 
var total_questions = 4; 

console.log("from js script!!")

function viewScore()
{
    console.log("your score is " + sessionStorage.getItem("score"));
}

function tallyScore(answer)
{
    if (answer == math_question)
    {
        score += 1; 
        questions_answered += 1;
        sessionStorage.setItem("score", score);
    }
    else
    {
        console.log("question 1 is wrong!!")
    }
}
