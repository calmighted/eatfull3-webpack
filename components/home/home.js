let body = document.querySelector('body');

const createHome = () =>{
    let home = document.createElement("div");
    home.classList.add('home');
    home.classList.add('container');
    // home.setAttribute('container','home');
    // home.innerText = "Home";

    let heroText = document.createElement('h1');
    heroText.textContent = "Come on down for some delicious cuisine!"
    
    let heroBtn1 = document.createElement('button');
    heroBtn1.innerText = "Oh Yes!"
    
    let heroBtn2 = document.createElement('button');
    heroBtn2.innerText = "Order Now!"

    
    home.appendChild(heroText);
    home.appendChild(heroBtn1);
    home.appendChild(heroBtn2);
    
    
    body.appendChild(home);

}

export default createHome;
