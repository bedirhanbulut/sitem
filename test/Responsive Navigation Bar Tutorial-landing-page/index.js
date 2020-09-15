const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    // Boole ile nav etkin durumunu ayarla
    let isActive = false;
    console.log("nav-active : " + isActive)
    

    burger.addEventListener("click", ()=>{

        //Navigasyon aç - kapat
        nav.classList.toggle("nav-active");

        // Navigasyon etkin durumunu doğru / yanlış olarak değiştir
        isActive = !isActive;
        console.log("nav-active : " + isActive)
        
        //animasyon linki
        navLinks.forEach((link, index)=>{
            if(isActive) {
                link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
                console.log("nav li: "+ index + " in");
            } else {
                // link.style.animation = "";
                link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
                // link.style.animation = "";
                console.log("nav li: "+ index + " out");
            }
            console.log(link.style.animation);
        });
        
        //Burger animasyonu
        burger.classList.toggle('toggle');
    });

}
navSlide();