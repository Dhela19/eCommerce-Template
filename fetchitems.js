console.log("Data Function Script Loaded")

//Declarations of Variables

let itemCategory = document.querySelector(".itemCategory");
let coverText = document.getElementById("coverText");
let itemImage = document.querySelector(".itemImage");
let categoryCover = document.querySelector(".categoryCover");
let categoryHeader = localStorage.getItem("categoryHeader")
let jsonPath = localStorage.getItem("jsonPath")
let itemName = document.querySelector(".itemName");
let itemPrice = document.querySelector(".itemPrice");
let beforePrice  = document.querySelectorAll(".beforePrice");
// let itemContainer = document.getElementsByClassName('itemContainer');
let displayData
let resultFromJson



//updating page manually
coverText.innerText = categoryHeader
categoryCover.style =`background-image:url("./res/${jsonPath}Cover.jpg")`
coverText.innerText = localStorage.getItem("categoryHeader")

//Fetching JSON Database
//Page Content
try{
    console.log("fetching json data...")
    fetch(`./items/${jsonPath}.json`)
    .then((res) => res.json())
    .then((data) => {
      // do stuff with the data
     resultFromJson = data;
   
    getData(resultFromJson)
    //   console.log(resultFromJson)
    });
}
catch(err){
    alert(err)
}
//Category Cover
// try{
//     console.log("fetching json data...")
//     fetch("./items/cover/cover.json")
//     .then((res) => res.json())
//     .then((data) => {
//       // do stuff with the data
//      resultFromJson = data;
//     getData(resultFromJson)
//       console.log(resultFromJson)
//     });
// }
// catch(err){
//     alert(err)
// }






//Validating JSON Operation

function getData(resultFromJson){
    console.log("validating json data...")
    try {
        if(resultFromJson){
            displayData = resultFromJson
            loopingResults(displayData)
            return
        }
        
    } catch (error) {
        console.log(error)
    }
}




// {
//     "name":"Product Name",
//     "price":1000,
//     "shop":"shopName",
//     "description":"this is the description of this product",
//     "imagePath":"./demo.png",
//     "productID":100
// },



function loopingResults(displayData){
   
    console.log("updating page with the results")
try {
    displayData.forEach((each, id)=>{
        const displayedData = `
                            <div class="itemContainer">
                            <div class="itemImageContainer">
                            <img class="itemImage" src="${each.imagePath}" alt="sampleimage">
                        </div>
                        <div class="itemDetails">
                            <h3 class="itemName">${each.name}</h3>
                            <p class="itemPrice">
                                N${each.price}<span class="beforePrice">N${each.price}</span>
                            </p>
                            <p id="id" class="hiddenStatus">${each.productID}</p>
                            <p id="cat" class="hiddenStatus">${each.productCat}</p>
                        </div>
                            </div>`    
                        
        itemCategory.insertAdjacentHTML("beforeend", displayedData)
        console.log("data has been uploaded successful")
        
    })
    doSomethingForMe(displayData)
} catch (error) {
    alert(error)
}
}