const prama=new URLSearchParams(window.location.search)
let di=document.getElementById("me").innerText=prama.get("title")
let de=document.getElementById("description-img1").src=prama.get("images1")
let de2=document.getElementById("description-img2").src=prama.get("ima")
let de3=document.getElementById("description-img3").src=prama.get("images3")
let de4=document.getElementById("description-img4").src=prama.get("images4")
document.getElementById("description-img5").src=prama.get("images5")
document.getElementById("description-img6").src=prama.get("images6")
document.getElementById("description-img7").src=prama.get("images7")
document.getElementById("description-img8").src=prama.get("images8")

// console.log(di)
// console.log(de)
// console.log(de2)
// console.log(de3)
// console.log(de4)
document.getElementById("description-img1-media").src=prama.get("images1")
document.getElementById("description-img2-media").src=prama.get("ima")
document.getElementById("description-img3-media").src=prama.get("images3")
document.getElementById("description-img4-media").src=prama.get("images4")



document.getElementById("prices-description").innerText=`$${prama.get("price")}`



let description11=document.getElementById("desc-id")
console.log(description11)
description11.setAttribute("data-id", prama.get("id"))