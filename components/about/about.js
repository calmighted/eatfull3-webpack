let body = document.querySelector('body');

const createAbout = () =>{
    let about = document.createElement("div");
    about.innerText = "About";
    body.appendChild(about);
}

export default createAbout;