import createHome from '../components/home/home'
import createAbout from '../components/about/about'
import createMenu from '../components/menu/menu'


let body = document.querySelector('body');

let container = document.querySelector("#content");

let navElement = document.createElement('div');
 navElement.classList.add("navBar")


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


const currentContainer = () => {
    container = document.querySelector('.container');
}



const createAboutPage = () => {
    currentContainer();
    body.removeChild(container);
    createAbout();

}
const createHomePage = () => {
    currentContainer();
    body.removeChild(container);
    createHome();
}
const createMenuPage = () => {
    currentContainer();
    body.removeChild(container);
    createMenu();
}

aboutLink.addEventListener('click',createAboutPage);




logo.addEventListener('click',createHomePage);
homeLink.addEventListener('click',createHomePage);
menuLink.addEventListener('click',createMenuPage);


let footer = document.createElement('div');
footer.classList.add('footer');

footer.innerHTML = '<p>Footer</p>'

container.appendChild(footer);

createHome();


