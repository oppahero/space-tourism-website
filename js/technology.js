const techTabs = document.querySelector(".tabs-ul");
const portraitImage = document.querySelector(".container-portrait-image");
const landscapeImage = document.querySelector(".container-landscape-image");
const techName = document.querySelector(".container-info__text__technology__name");
const techDescription = document.querySelector(".container-info__text__description");

let technology;

fetch("../js/data.json")
  .then((res) => res.json())
  .then((data) => {
    technology = data.technology;
  });

const changeImage = (id) => {
  portraitImage.style.backgroundImage = `url(${technology[id].images.portrait})`;
  landscapeImage.style.backgroundImage = `url(${technology[id].images.landscape})`;
};

const changeText = (id) => {
  techName.innerHTML = technology[id].name;
  techDescription.innerHTML = technology[id].description;
};

const changeTechnologyTab = (e) => {
  if (e.target.localName == "h4") {
    document.querySelector(".tabs-ul li.active").classList.remove("active");
    e.target.parentNode.classList.add("active");

    changeImage(e.target.id);
    changeText(e.target.id);
  }
};

techTabs.addEventListener("click", changeTechnologyTab);
