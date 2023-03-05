console.log("general script loaded")

//Declarations of Variables
productSearchBar = document.getElementById('productSearchBar')




productSearchBar.addEventListener(onfocus, ()=>{
    
})
function animateSearchBar(){
    productSearchBar.style = "  transition:1000ms; border-radius:0rem; width:40%;"
    console.log("searchBar.animate")
}

function releaseAnimation(){
    productSearchBar.style = "  transition:1000ms; border-radius:2rem; width:auto%;"
    console.log("productSearchBar.return")
}