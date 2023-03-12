console.log("items category script has loaded");

// Declarations of variables


const doSomethingForMe = (oga)=>{
    const itemContainer = document.querySelectorAll('.itemContainer')
    popForMummy(itemContainer)
}



// Adding Event Listener
const popForMummy = (itemContainer)=>{
    itemContainer.forEach((item) => {
        item.addEventListener("click", () => {
            alert("you have clicked a product");
        });
    });
    
    console.log(itemContainer)
}

