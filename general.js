console.log("general script loaded")

//Declarations of Variables
productSearchBar = document.getElementById('productSearchBar')
footerIcons = document.querySelectorAll('.partnersEdit')
console.log(footerIcons)


function animateSearchBar(){
    productSearchBar.style = "  transition:1000ms; border-radius:0rem; width:40%;"
    console.log("searchBar.animate")
}

function releaseAnimation(){
    productSearchBar.style = "  transition:1000ms; border-radius:1rem; width:auto%;"
    console.log("productSearchBar.return")
}

function home(){
    window.location.href="/"
}

// toContact=()=>{
    
// }

const header = document.querySelector('.headerName')
header.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.textContent)
})
console.log(header);
// footerIcons.addEventListener("click", footerIconClicked)

function footerIconClicked(){
    console.log("footer icon clicked")
    window.location.href="./contact.html"
}
    


const all = document.querySelectorAll(".headerName")
// console.log(allebbbBEe)


// all.addEventListener("click", ()=>{
//     console.log('food')
//     window.location.href="/"
   
// })