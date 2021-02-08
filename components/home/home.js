let body = document.querySelector('body');

const createHome = () =>{
    let home = document.createElement("div");
    home.innerText = "Home";
    body.appendChild(home);
}

export default createHome;
