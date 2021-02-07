let body = document.querySelector('body');

const createMenu = () =>{
    let menu = document.createElement("h1");
    menu.innerText = "Menu";
    body.appendChild(menu);
    console.log("Menu")
}

export default createMenu;