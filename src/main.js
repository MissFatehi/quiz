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
let currentQuestion = 0;
let intervalId= ""; // شناسه interval
let correctAsw = 0;    // درست: بیرون از forEach
let time = 15;

let myCategory = "programming";
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




startBtn.addEventListener("click", () => {
  console.log(myCategory);
  console.log(count);
  sectionOneEl.style.display = "none";
  sectionTwoEl.style.display = "flex";

  const categoryQuestions = questions.find(
    (cat) => cat.category === myCategory,
  ).questions;
  console.log(categoryQuestions);

  const selectedQuestions = categoryQuestions.slice(0, count);
  console.log(selectedQuestions);
  currentQuestion = 0;

  const startInterval = () => {
        timerEl.textContent = `${time} s`;
        const intervalId = setInterval(() => {
             --time;
             if (time <= 0) {
            clearInterval(intervalId);
            // timerEl.parentElement.style.backgroundColor = "red";
            // answerListEl[correctAsw].style.background ="#CCE4D1";
            // answerListEl[correctAsw].style.borderColor="#CCFFD1";
          }
           timerEl.textContent = `${time} s`;
        }, 1000);};

  const showQuestion = (selectedQuestions) => {
    const current = selectedQuestions[currentQuestion];
    questionEl.textContent = current.question;
    answerListEl.forEach((answer, index) => {
      answer.textContent = current.options[index];
      const correctAsw = current.correctAnswer;
    });
  startInterval();  };
   
    showQuestion(selectedQuestions);


  nextBtn.addEventListener("click", () => {
        currentQuestion++;
    if (currentQuestion < count) {
          startInterval();

      showQuestion(selectedQuestions);
    } else {
      sectionTwoEl.style.display = "none";
      resultEl.classList.remove("hidden");
    }
  });

});
