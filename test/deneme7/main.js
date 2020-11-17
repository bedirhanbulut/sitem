//Create function to select elements

//Open and close nav on click
const menuIcon = document.querySelector(".menu-icons");
menuIcon.addEventListener("click", () => {
    console.log("OK");
    const nav = document.getElementsByTagName("nav")[0];
    nav.classList.toggle("active");
});
