console.log("general script loaded")

//Declarations of Variables
productSearchBar = document.getElementById('productSearchBar')
footerIcons = document.querySelectorAll('.partnersEdit')



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
footerIcons.addEventListener("click", ()=>{
    window.location.href="./contact.html"
})