window.addEventListener("scroll",setScrollVar);
window.addEventListener("resize",setScrollVar);

function setScrollVar(){
    const htmlElement = document.documentElement;
    const percentageOfScreenScrolled = 
            htmlElement.scrollTop/ htmlElement.clientHeight
    htmlElement.style.setProperty("--scroll",
        Math.min(percentageOfScreenScrolled *100,100))   
}

setScrollVar();