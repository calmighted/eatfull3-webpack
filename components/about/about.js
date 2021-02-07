let body = document.querySelector('body');

const createAbout = () =>{
    let about = document.createElement("h1");
    about.innerText = "About";
    body.appendChild(about);
    console.log("About")
}

export default createAbout;