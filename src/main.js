import { questions } from "./questions";
import "@fortawesome/fontawesome-free/css/all.min.css";
const categoriesEl = document.getElementById("categories");
const catItems = categoriesEl.querySelectorAll(".item");
const numberListEl = document.getElementById("numberList");
const numberitem = numberListEl.querySelectorAll(".num");
const startBtn = document.getElementById("startBtn");
const sectionOneEl = document.getElementById("sectionOne");
const sectionTwoEl = document.getElementById("sectionTwo");
const questionEl = document.querySelector("#question");
const ansersBoxEl = document.querySelector("#answers");
const answerListEl = ansersBoxEl.querySelectorAll("li");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const timerEl = document.getElementById("timer");
const correctCountEl = document.getElementById("correctCount"); 
const countAllEl = document.getElementById("countAll");
const countEl = document.getElementById("count");
const reStartGameEl = document.getElementById("reStartGame");
let currentQuestion = 0;
let intervalId= ""; 
let correctAsw = 0; 
let time = 15;
let myCategory = "programming";
let selectedQuestions = [];
let correctAnswerCount = 0 ;
let countQuestion = 0 ;

    catItems[0].classList.add("activeCat");
    numberitem[0].classList.add("activeNum");


  
catItems.forEach((item) => {
  item.addEventListener("click", () => {
    myCategory = item.textContent.toLowerCase();
    catItems.forEach((i) => {
      i.classList.remove("activeCat");
    });
    item.classList.add("activeCat");
  });
});

let count = 5;
numberitem.forEach((item) => {
  item.addEventListener("click", () => {
    count = Number(item.textContent);
    numberitem.forEach((i) => {
      i.classList.remove("activeNum");
    });
    item.classList.add("activeNum");
  });
});

 const startInterval = () => {
        timerEl.textContent = "15 s";
        time = 15;
         intervalId = setInterval(() => {
             --time;
             if (time === 0) {
            clearInterval(intervalId);
            answerListEl.forEach((item)=>{item.style.pointerEvents = 'none';})
            timerEl.parentElement.classList.add("timeout");
            answerListEl[correctAsw].classList.add("correctAnser");
            showNextBtn();
          }
           timerEl.innerHTML = `${time} s`;
        }, 1000);};

        const removeCOlors = ()=>{
          timerEl.parentElement.classList.remove("timeout");
          answerListEl[correctAsw]?.classList.remove("correctAnser");
          answerListEl.forEach((wrong)=>{wrong.classList.remove("wrongAnswer")});
        }

        const showQuestion = (selectedQuestionList) => {
            startInterval();
            countEl.textContent= `${++countQuestion}`;
             const current = selectedQuestionList[currentQuestion];
             questionEl.textContent = current.question;
             correctAsw = current.correctAnswer;
             answerListEl.forEach((answer, index) => {
             answer.style.pointerEvents = 'painted';
             answer.textContent = current.options[index];
              }); 
            };

 const selectAnswer = ()=>{
  answerListEl.forEach((answer,index)=>{
      answer.addEventListener("click",()=>{
        clearInterval(intervalId);
        answerListEl.forEach((item)=>{item.style.pointerEvents = 'none';})
        if(index === Number(correctAsw) ){
           correctAnswerCount++;
          answer.classList.add("correctAnser");
          console.log(correctAnswerCount);
          showNextBtn();
        }
        else{
            answer.classList.add("wrongAnswer");
            answerListEl[correctAsw].classList.add("correctAnser");
            showNextBtn();
        }
      })})
 }
selectAnswer ();


   

startBtn.addEventListener("click", () => {
  console.log(myCategory);
  console.log(count);
  sectionOneEl.style.display = "none";
  sectionTwoEl.style.display = "flex";
  countAllEl.textContent = count;


  const categoryQuestions = questions.find(
    (cat) => cat.category === myCategory)?.questions;
  console.log(categoryQuestions);

   selectedQuestions = categoryQuestions?.slice(0, count);
  console.log(selectedQuestions);
    showQuestion(selectedQuestions)

});

function showNextBtn (){
  nextBtn.style.display = "flex";
}

nextBtn.addEventListener("click", () => {
  nextBtn.style.display= "none";
       ++currentQuestion;
    if (currentQuestion < count) {
      clearInterval(intervalId);
      removeCOlors();
      showQuestion(selectedQuestions);
    } else {
      sectionTwoEl.style.display = "none";
      resultEl.classList.remove("hidden");
      correctCountEl.textContent = `${correctAnswerCount}`;
      countAllEl.textContent = count;
    }
  });

reStartGameEl.addEventListener("click",()=>{
    location.reload();
})