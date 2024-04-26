//===================MENU BUTTON==========================
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-link");
const menuBtnIcon = document.querySelector("#menu-btn");
const themeToggler = document.querySelector(".nav_btn");


menuBtn.addEventListener('click',(e)=>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute('class',"material-icons-sharp")
    menuBtnIcon.textContent = ( isOpen?"close":"menu");


})

navLinks.addEventListener('click', (e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.textContent = "menu";
})

//Change Theme
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables'); 
 
    //change the toggle button
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
 })