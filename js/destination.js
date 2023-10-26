const planetTabs = document.querySelector(".tabs-ul");
const planetImg = document.querySelector(".planet-image");

const changePlanetTab = (e) => {

  const planetTabActive = document.querySelector(".tabs-ul a.active");
  const planetDivActive = document.querySelector(".container-info__planet__div.active");

  if (e.target.tagName == "A") {
    planetTabActive.classList.remove("active");
    planetDivActive.classList.remove("active");

    let id = e.target.href.split("#")[1];
    document.querySelector(`a[href="#${id}"]`).classList.add("active");
    document.getElementById(id).classList.add("active");

    planetImg.setAttribute("src", `../assets/destination/image-${id}.png`)
  }
};

planetTabs.addEventListener("click", changePlanetTab);
