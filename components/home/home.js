let body = document.querySelector('body');

const createHome = () =>{
    let home = document.createElement("div");
    home.classList.add('home');
    home.classList.add('container');
    // home.setAttribute('container','home');
    home.innerText = "Home";
    body.appendChild(home);

}

export default createHome;
