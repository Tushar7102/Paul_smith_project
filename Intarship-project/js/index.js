let suits=document.getElementById("Suits")
let linktag=document.getElementById("linktag")
suits.addEventListener("click",()=>{
    alert("Suits_Varieties")
    linktag.href =`product.html?category=${encodeURIComponent("Suits")}`
})

let polo_shirt=document.getElementById("Polo-Shirt")
let linktag2=document.getElementById("linktag2")
polo_shirt.addEventListener("click",()=>{
    alert("polo_shirt_Varieties")
    linktag2.href =`product.html?category=${encodeURIComponent("PoloShirts")}`
})


let shirt=document.getElementById("Shirt")
let linktag3=document.getElementById("linktag3")
shirt.addEventListener("click",()=>{
    alert("shirt_Varieties")
    linktag3.href =`product.html?category=${encodeURIComponent("Shirt")}`
})