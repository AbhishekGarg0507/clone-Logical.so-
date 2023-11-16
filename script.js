window.addEventListener("scroll",setScrollVar);
window.addEventListener("resize",setScrollVar);

function setScrollVar(){
    const htmlElement = document.documentElement;
    const percentageOfScreenScrolled = 
            htmlElement.scrollTop/ htmlElement.clientHeight
    htmlElement.style.setProperty("--scroll",
        Math.min(percentageOfScreenScrolled *100,100))   

    htmlElement.style.setProperty("--scrollFull" , (percentageOfScreenScrolled.toFixed(1))*100 )   
        
}

setScrollVar();

const observer = new IntersectionObserver(entries =>{
        for(let i = entries.length-1 ; i >=0 ; i--){
                const entry = entries[i]
                if(entry.isIntersecting){
                        document.querySelectorAll("[data-img]").forEach(img =>{
                                img.classList.remove("show")
                        })
                        const img = document.querySelector(entry.target.dataset.imgToShow)
                        img?.classList.add("show")
                        break
                }
        }
        
})

document.querySelectorAll("[data-img-to-show]").forEach(section =>{
        observer.observe(section);
})
const obse = new IntersectionObserver(entry =>{

                if(entry.isIntersecting){
                        document.querySelector("[data-img-last]").forEach(img =>{
                                img.classList.remove("lastimg")
                        })
                        const img = document.querySelector(entry.target.dataset.imgToShow)
                        img?.classList.add("lastimg")
                }
        
        
})

document.querySelectorAll("[data-img-to-show]").forEach(section =>{
        observer.observe(section);
})

