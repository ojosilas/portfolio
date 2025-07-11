// hamburger starts here 
let hamburger = document.getElementById("hamburger-menu")
let navList = document.getElementById("list")


hamburger.addEventListener("click", () => {
    navList.classList.toggle("show");
});


// project starts here 
function showAll (event) {
    event.preventDefault(); 
    
    document.getElementById('webDevelopment1').style.display = 'block'
    document.getElementById('webDevelopment2').style.display = 'block'
    document.getElementById('webDevelopment3').style.display = 'block'
    document.getElementById('webDevelopment4').style.display = 'block'
    document.getElementById('webDevelopment5').style.display = 'block'
    document.getElementById('webDevelopment6').style.display = 'block'
    document.getElementById('graphics').style.display = 'block'
    document.getElementById('logo').style.display = 'block'
}
function showWebdevelopment () {
    document.getElementById('webDevelopment1').style.display = 'block'
    document.getElementById('webDevelopment2').style.display = 'block'
    document.getElementById('webDevelopment3').style.display = 'block'
    document.getElementById('webDevelopment4').style.display = 'block'
    document.getElementById('webDevelopment5').style.display = 'block'
    document.getElementById('webDevelopment6').style.display = 'block'
    document.getElementById('graphics').style.display = 'none'
    document.getElementById('logo').style.display = 'none'
}
function showGraphics () {
    document.getElementById('webDevelopment1').style.display = 'none'
    document.getElementById('webDevelopment2').style.display = 'none'
    document.getElementById('webDevelopment3').style.display = 'none'
    document.getElementById('webDevelopment4').style.display = 'none'
    document.getElementById('webDevelopment5').style.display = 'none'
    document.getElementById('webDevelopment6').style.display = 'none'
    document.getElementById('graphics').style.display = 'block'
    document.getElementById('logo').style.display = 'none'
}
function showLogo () {
    document.getElementById('webDevelopment1').style.display = 'none'
    document.getElementById('webDevelopment2').style.display = 'none'
    document.getElementById('webDevelopment3').style.display = 'none'
    document.getElementById('webDevelopment4').style.display = 'none'
    document.getElementById('webDevelopment5').style.display = 'none'
    document.getElementById('webDevelopment6').style.display = 'none'
    document.getElementById('graphics').style.display = 'none'
    document.getElementById('logo').style.display = 'block'
}
// project ends here 


// footer starts here 
document.getElementById("year").textContent = new Date ().getFullYear() 
