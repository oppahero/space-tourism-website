# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

Below are images of the views that make up the project and how they adapt to different devices.

![](./assets/screenshots/Home%20-%20Desktop.png)
![](./assets/screenshots/Home%20-%20Tablet.png)
![](./assets/screenshots/Home%20-%20Mobile.png)
![](./assets/screenshots/Destination%20-%20Desktop.png)
![](./assets/screenshots/Destination%20-%20Tablet.png)
![](./assets/screenshots/Destination%20-%20Mobile.png)
![](./assets/screenshots/Crew%20-%20Desktop.png)
![](./assets/screenshots/Crew%20-%20Tablet.png)
![](./assets/screenshots/Crew%20-%20Mobile.png)
![](./assets/screenshots/Technology%20-%20Desktop.png)
![](./assets/screenshots/Technology%20-%20Tablet.png)
![](./assets/screenshots/Technology%20-%20Mobile.png)

### Links

- Solution URL: [Github Repo](https://github.com/oppahero/space-tourism-website)
- Live Site URL: [Site](https://oppahero.github.io/space-tourism-website/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Media Queries
- Javascript

### What I learned

In one of the views for the information to be displayed in each of the tabs, the info was indicated statically in the html. And for the other two pages the information is loaded dynamically as the user clicks on the tabs.

With this it was possible to put into practice the use of javascript to:

- Get the html elements, add or remove classes, and change values ​​of an attribute

```js
const changePlanetTab = (e) => {
    .
    .
    const planetTabActive = document.querySelector(".tabs-ul a.active");
    planetTabActive.classList.remove("active");
    .
    .
    let id = e.target.href.split("#")[1];
    document.querySelector(`a[href="#${id}"]`).classList.add("active");
    .
    .
    planetImg.setAttribute("src", `../assets/destination/image-${id}.png`)
}
```

- Get next sibling element, the parent of an element and the first child

```js
const changeCircleActive = () => {
    .
    .
    let newCircleActive =  document.querySelector("circle.active").nextElementSibling;
    .
    .
    let firstCircle = document.querySelector("svg").firstElementChild;
}

const changeTechnologyTab = (e) => {
    .
    .
    e.target.parentNode.classList.add("active");
    .
    .
}
```

- Change content html and a css style

```js
const changeImage = (id) => {
  portraitImage.style.backgroundImage = `url(${technology[id].images.portrait})`;
  landscapeImage.style.backgroundImage = `url(${technology[id].images.landscape})`;
};

const changeText = (id) => {
  techName.innerHTML = technology[id].name;
  techDescription.innerHTML = technology[id].description;
};
```


### Continued development

In this practice project, I had some trouble resizing images depending on the height of the container and applying opacity/blur on a container without affecting the elements inside them. Additionally, this was the first project to use a grid with grid areas.

So, for future projects or challenges I want to continue putting those properties into practice.


### Useful resources

- [Navigate dom elements](https://lenguajejs.com/javascript/dom/navegar-elementos-dom/) - This was useful for learning properties about how to access elements related to the element in question.

- [Sizing items in CSS](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) 

## Author

- Frontend Mentor - [@oppahero](https://www.frontendmentor.io/profile/oppahero)
