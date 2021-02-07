let body = document.querySelector('body');

const createHome = () =>{
    let home = document.createElement("h1");
    home.innerText = "Home";
    body.appendChild(home);
    console.log("Home")
}

export default createHome;
