//6.30

let today = document.querySelector("#input");
let btn = document.querySelector("#btn");
let pics = {
  Sunday: ["./images/HawaiiTemple.jpg", "./images/OrlandoTemple.jpg"],
  Monday: ["./images/Lighthouse.jpg", "./images/Wave.jpg"],
  Tuesday: ["./images/Coconuts.jpg", "./images/Pineapple.jpg"],
  Wednesday: ["./images/PinkFlower.jpg", "./images/WhitePlumeria.jpg"],
  Thursday: ['./images/Dolphins.jpg', "./images/Wildlife.svg"],
  Friday: ["./images/woven.jpg", "./images/resortBground.jpg"],
  Saturday: ["./images/hero.jpg","./images/island2.jpg"],
};
let current = document.querySelector("#today");
let container = document.querySelector("#container");

function day(today) {
  switch (today) {
    case "0":
      today = "Sunday";
      break;
    case "1":
      today = "Monday";
      break;
    case "2":
      today = "Tuesday";
      break;
    case "3":
      today = "Wednesday";
      break;
    case "4":
      today = "Thursday";
      break;
    case "5":
      today = "Friday";
      break;
    case "6":
      today = "Saturday";
    default:
      break;
  }
  return today;
}
function pic(today) {
  container.innerHTML = ''
  pics[today].map((path) => {
    let img = document.createElement("img");
    img.src = path;
    container.append(img);
  });
}
console.log(today);
btn.addEventListener("click", () => {
  let currentDay = day(today.value);
  current.textContent = currentDay;
  pic(currentDay);
  input.value = ''
  input.focus()
});
