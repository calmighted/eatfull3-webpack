let body = document.querySelector('body');

const createMenu = () =>{
    let menu = document.createElement("div");
    menu.innerText = "Menu";
    body.appendChild(menu);
}

export default createMenu;