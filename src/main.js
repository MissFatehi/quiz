const programmingEl = document.getElementById("programming");
const geographyEl = document.getElementById("geography");
const mathematicsEl = document.getElementById("mathematics");
const entertainmentEl = document.getElementById("entertainment");
const fivequestionsEl = document.getElementById("5");
const tenquestionsEl = document.getElementById("10");
const fifteenquestionsEl = document.getElementById("15");
const twentyquestionsEl = document.getElementById("20");
const twentyfivequestionsEl = document.getElementById("25");
const startBtn = document.getElementById("startBtn");
const sectionOneEl = document.getElementById("sectionOne");
const sectionTwoEl = document.getElementById("sectionTwo");

let category = "programming";

programmingEl.addEventListener("click", () => {
  category = "programming";
});

geographyEl.addEventListener("click", () => {
  category = "geography";
});

mathematicsEl.addEventListener("click", () => {
  category = "mathematics";
});

entertainmentEl.addEventListener("click", () => {
  category = "entertainment";
});

let count = 5;

fivequestionsEl.addEventListener("click", () => {
  count = 5;
});

tenquestionsEl.addEventListener("click", () => {
  count = 10;
});

fifteenquestionsEl.addEventListener("click", () => {
  count = 15;
});

twentyquestionsEl.addEventListener("click", () => {
  count = 20;
});

twentyfivequestionsEl.addEventListener("click", () => {
  count = 25;
});

startBtn.addEventListener("click", () => {
  console.log(category);
  console.log(count);
  sectionOneEl.style.display = "none";
  sectionTwoEl.style.display = "flex";

  const filterCategory = questions.filter((item, index) => {
    return item.category === category;
  });
  console.log(filterCategory);
});
