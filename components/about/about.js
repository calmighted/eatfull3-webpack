let body = document.querySelector('body');

const createAbout = () =>{
    let about = document.createElement("div");
    about.classList.add('about');
    about.classList.add('container');
    
    let text = "In 2069, we opened our doors at a very small Chicago storefront with a very big idea. Instead of fast food, we’d serve fast fuel: shakes that were delicious, nutritious, and protein-packed.It was a success from the start but quickly became something even bigger... a game changer. We saw what was happening and got excited. Let’s keep going. So we discovered quinoa and expanded the menu to serve a full selection of high-protein salads, wraps, and bowls customizable for all diets. Every body loved it. The all-day power of protein grew in popularity. We all started eating, feeling and moving better. It’s all good. All these years and successes later, we never forget where we came from. We started a protein-powered movement from that small storefront. And we’re still going strong."


    let heading = document.createElement('h1');
    heading.innerText = "About EatFull"

    let aboutText = document.createElement('p');
    aboutText.innerText = text


    about.appendChild(heading);
    about.appendChild(aboutText);
    body.appendChild(about);
}

export default createAbout;