const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

answerArray = ["90°","right angled"];

function checkAnswer(){

}

submitBtn.addEventListener("click", function checkAnswer(){
    let score = 0;
    let i = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === answerArray[i]){
            score = score+1;
        }
        i = i+1;
    }
    output.innerText = "Yay! Your Score is "+score;
})