let menuButton = document.querySelector(".right-button");
let menu = document.querySelector(".drop-down-menu");

menuButton.addEventListener("click", (e) => 
    {
        e.stopPropagation();
        menu.style.display = "block";
        
    }
)
document.addEventListener("click", () => 
    {
       menu.style.display = "none";   
    }
)
