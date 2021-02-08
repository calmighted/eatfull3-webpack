import createHome from '../components/home/home'
import createAbout from '../components/about/about'
import createMenu from '../components/menu/menu'

// import "./index.css"

// console.log("Its working yay!")

let body = document.querySelector('body');

let container = document.querySelector("#content");

let navElement = document.createElement('div');
//  navElement += "<a class= 'active' href='#home'>Home</a> ";
//  navElement += "<a href='#menu'>Menu</a> ";
//  navElement += "<a href='#about'>About</a> ";
//  navElement.style.backgroundColor = 'red';
 navElement.classList.add("navBar")
//  navElement.textContent = "This is nav bar";

let logo = document.createElement('a');
logo.innerText = "🌮 EatFull"
logo.setAttribute("id",'logo');

let homeLink = document.createElement('a');
homeLink.textContent = "Home";
homeLink.setAttribute('href','#home');

let aboutLink = document.createElement('a');
aboutLink.textContent = "About";
aboutLink.setAttribute('href','#about');

let menuLink = document.createElement('a');
menuLink.textContent = "Menu";
menuLink.setAttribute('href','#menu');

navElement.appendChild(logo);
navElement.appendChild(homeLink);
navElement.appendChild(aboutLink);
navElement.appendChild(menuLink);
container.appendChild(navElement);



const createAboutPage = () => {
    body.removeChild(body.lastChild);
    createAbout();
    // aboutLink.classList.add('active1');
}
const createHomePage = () => {
    body.removeChild(body.lastChild);
    createHome();
}
const createMenuPage = () => {
    body.removeChild(body.lastChild);
    createMenu();
}





aboutLink.addEventListener('click',createAboutPage);


logo.addEventListener('click',createHomePage);
homeLink.addEventListener('click',createHomePage);
menuLink.addEventListener('click',createMenuPage);

// createHome();