let body = document.querySelector('body');

const createAbout = () =>{
    let about = document.createElement("div");
    about.classList.add('about');
    about.classList.add('container');
    about.innerText = "About";
    body.appendChild(about);
}

export default createAbout;