let body = document.querySelector('body');

const createMenu = () =>{
    let menu = document.createElement("div");
    menu.classList.add('menu');
    menu.classList.add('container');
    // menu.innerText = "Menu";


    let menuhead = document.createElement('h1');
    menuhead.innerText = "Menu";


    let menuContent = document.createElement('p');
    menuContent.innerText = "Its Empty for now...please try again later ヽ(ಠ_ಠ)ノ"; 

    menu.appendChild(menuhead);
    menu.appendChild(menuContent)

    body.appendChild(menu);
}

export default createMenu;