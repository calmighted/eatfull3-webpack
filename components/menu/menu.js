let body = document.querySelector('body');

const createMenu = () =>{
    let menu = document.createElement("div");
    menu.classList.add('menu');
    menu.classList.add('container');
    menu.innerText = "Menu";
    body.appendChild(menu);
}

export default createMenu;