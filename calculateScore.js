var ss = JSON.parse(localStorage.getItem("scoreSheet"));
console.log("score sheet: ", ss);

function markResults(answer, question)
{ 
    console.log("marking result...");
    var scoreSheet = JSON.parse(localStorage.getItem('scoreSheet')); 
    if (answer == null)
    {
        scoreSheet[question] = "skipped"; 
    }
    else
    {
        // mark result
        if (answer)
        {
            scoreSheet[question] = "correct"; 
        }
        else
        {
            scoreSheet[question] = "incorrect"; 
        }
        localStorage.setItem("scoreSheet", JSON.stringify(scoreSheet)); 

    } 
    
} 

function questionsCorrectAnswered()
{
    console.log("calculating score...");
    var questionsCorrect = JSON.parse(localStorage.getItem("questionsCorrect"));
    var questionsAnswered = JSON.parse(localStorage.getItem("questionsAnswered")); 
    var scoreSheet = JSON.parse(localStorage.getItem("scoreSheet")); 
    
    for (var subject of Object.keys(scoreSheet))
    {
        console.log(subject);
        if (scoreSheet[subject] == null)
        {
            questionsAnswered -= 1;
        }
        // must explicitly check if it is true
        else if (scoreSheet[subject] == "correct")
        {
            questionsCorrect += 1;
        }
    }

    // store into JSON file
    localStorage.setItem("questionsCorrect", JSON.stringify({"questionsCorrect": questionsCorrect}));
    localStorage.setItem("questionsAnswered", JSON.stringify({"questionsAnswered": questionsAnswered}));
    console.log("questions answered: ", JSON.parse(localStorage.getItem("questionsAnswered")));
}

function getScore(result)
{
    return JSON.parse(localStorage.getItem(result))[result];
}