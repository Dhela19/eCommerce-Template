console.log("shop script loaded")


const itemCategories = document.querySelectorAll('.itemCategory .seeMore')

//function to handle see more
const seeMoreHandler = function(event){
    // console.dir(event);
    const clicked = event.target
    const categoryHeader = clicked.parentElement.querySelector('h2').innerText;
   const identifier = clicked.parentElement.querySelector('h2').textContent.trim().toLowerCase().replaceAll(' ', '')
   const url = `/${identifier}.html`
//    window.location.href = url
console.log(identifier)
localStorage.setItem("jsonPath", identifier)
localStorage.setItem("categoryHeader", categoryHeader)
window.location.href="./itemscategory.html"
// console.log(localStorage.getItem("jsonPath"))
}   

//event listener to see more
itemCategories.forEach(each=>{
    each.addEventListener('click', seeMoreHandler)
})

