const main = (() =>{

    const headerToggleButton = document.querySelector(".header-toggle-button");
    const navbarLinks = document.querySelector(".navbar-links");
    const screenWidth = window.screen.width;
    const links = navbarLinks.querySelectorAll('a[href^="#"]');

    headerToggleButton.addEventListener("click", () =>{
        if (navbarLinks.classList.contains("active")) {
            navbarLinks.classList.remove("active");
            navbarLinks.classList.add("active-reverse");

            navbarLinks.addEventListener("animationend", () => {
                navbarLinks.style.display = "none";
            }, { once: true });
        } 
        else {
            navbarLinks.classList.remove("active-reverse");
            navbarLinks.classList.add("active");

            navbarLinks.style.display = "flex";
        }
    });

    

    for(let i = 0; i < links.length; i++){
        links[i].addEventListener("click", function(e) {
            if(screenWidth < 526){
                navbarLinks.classList.remove("active");
                navbarLinks.style.display = "none";
            }
        })
    }
})();