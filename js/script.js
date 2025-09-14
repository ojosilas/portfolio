// hamburger starts here 
let hamburger = document.getElementById("hamburger-menu")
let navList = document.getElementById("list")


hamburger.addEventListener("click", () => {
    navList.classList.toggle("show");
});
// hamburger ends here 


// portfolio starts here 
document.getElementById("year").textContent = new Date ().getFullYear() 


const cont = document.getElementById('container4')
const more = document.getElementById('more')
const less = document.getElementById('less')

more.addEventListener('click', ()=> {
    cont.style.display = 'block'
    more.style.display = 'none'
    less.style.display = 'block'
})

less.addEventListener('click', () => {
    cont.style.display = 'none'
    less.style.display = 'none'
    more.style.display = 'block'
})
// portfolio ends here 