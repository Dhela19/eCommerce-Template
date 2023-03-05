//This script is meant to control the animation of the elements in the html file

//Declaration of global variables
console.log("animation script loaded")
featuredName = document.getElementById('featuredName')
featuredImageContainer = document.getElementById('featuredImageContainer')
featuredCTA = document.getElementById('featuredCTA')


function featuredNameAnimate(){
    featuredName.style=" transition:1s;font-size:10.3rem;-webkit-text-stroke-width: 0.3rem;-webkit-text-stroke-color: #974063;color:transparent;"
    console.log("AnimatingFeaturedItemName")
}

function featuredNameReturn(){
    featuredName.style="transition:1s; font-size:10rem; margin:auto auto 4rem 1rem; "
    console.log("featuredNameAnimationStop")
}




function featuredImageContainerAnimate(){
    featuredImageContainer.style=" transition:1s; transform: scale(1.05);"
    console.log("AnimatingFeaturedImageContainer")
}

function featuredImageContainerReturn(){
    featuredImageContainer.style="transition:1s; transform: scale(1); "
    console.log("featuredImageContainerAnimationStop")
}

