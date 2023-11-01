//import data from "./data.json" assert { type: 'json' };;
const personImage = document.querySelector(".person-image");
const crewRol = document.querySelector(".container-crew__info__rol");
const crewName = document.querySelector(".container-crew__info__name");
const crewBio = document.querySelector(".container-crew__bio");

let id = 0;
let crew;

fetch("../js/data.json")
  .then((res) => res.json())
  .then((data) => {
    crew = data.crew;
  });

const changeCircleActive = () => {
  let circleActive = document.querySelector("circle.active");
  circleActive.setAttribute("opacity", "0.174363");
  circleActive.classList.remove("active");

  let newCircleActive = circleActive.nextElementSibling;

  if (newCircleActive) {
    newCircleActive.setAttribute("opacity", "1");
    newCircleActive.classList.add("active");
  } else {
    let circles = document.querySelector("svg");
    let firstCircle = circles.firstElementChild;
    firstCircle.setAttribute("opacity", "1");
    firstCircle.classList.add("active");
  }
};

setInterval(function () {
  changeCircleActive();

  id++;
  if (id === crew.length) id = 0;

  crewRol.innerHTML = crew[id].role;
  crewName.innerHTML = crew[id].name;
  crewBio.innerHTML = crew[id].bio;
  personImage.setAttribute("src", crew[id].images.png);
  personImage.setAttribute("id", crew[id].id);
}, 4500);
