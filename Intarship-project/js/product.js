let productdata=[]
let productdata2=[]
function cardlist(data)
{
    // console.log(data)
    let store=data.map((el)=>singleCard(el.images,el.price,el.title,el.id))
    // store === cardlist(filterdata)
    //  console.log(store)
    document.getElementById("product-sliders").innerHTML=store.join("")
    
}


function fetdata(){
    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then((data)=>{
      productdata=data
      productdata2=data
      cardlist(data)
    })
    .catch((err)=> console.log(err))
}

fetdata()


function singleCard(images,price,title,id) {
    let card = `
    
     <div class="card-list">
   <a href="description.html?title=${encodeURIComponent(title)}&images1=${encodeURIComponent(images[1])}&ima=${encodeURIComponent(images[2])}&images3=${encodeURIComponent(images[3])}&images4=${encodeURIComponent(images[0])}&images5=${encodeURIComponent(images[4])}&images6=${encodeURIComponent(images[5])}&images7=${encodeURIComponent(images[6])}&images8=${encodeURIComponent(images[7])}&price=${encodeURIComponent(price)}&id=${encodeURIComponent(id)}" class="text-decoration-none">
   <div class=" mb-0 p-0 mt-4 marl position-relative top-0  left-0" id="${id}">
   <div class="products-images-main">
     <img src="${images[0]}">
     <div class="products-images">
     <img src="${images[1]}">
     </div>
     <span class="text-center product-buy col-11">
     <div class="row cart-row g-5 justify-content-between">
     <div class="col-5 product-wish"><i class="bi bi-plus-lg"></i>Add to Wishlist</div>
     <div class="col-5 product-cart"><i class="bi bi-plus-lg"></i> Add Card</div>
     </div>
     </span>
     </div>
     <div class="product-details mt-4">
     <p class="product-name">${title}</p>
     <p class="product-price">$${price}</p></div>
    </div>
   </a>
    </div>
`
  return card
}
    
let dataformhomesuits=new URLSearchParams(window.location.search)

window.addEventListener("load",()=>{
  setTimeout(()=>{
    let filterdata=productdata.filter((el)=>el.category === dataformhomesuits.get("category"))
    console.log(filterdata)
    if(dataformhomesuits.get("category")=="Suits")
      {
        cardlist(filterdata)
        let low=document.querySelector(".low")
console.log(low)
low=document.addEventListener("click",()=>{
    let sortdata=filterdata.sort((a,b)=>a.price-b.price)
  cardlist(sortdata)
})
      }

   else if(dataformhomesuits.get("category")==="PoloShirts"){
    cardlist(filterdata)
    let low=document.querySelector(".low")
    low=document.addEventListener("click",()=>{
    let sortdata=filterdata.sort((a,b)=>a.price-b.price)
    cardlist(sortdata)
})
   }
   else if(dataformhomesuits.get("category")==="Shirt")
    {
      cardlist(filterdata)
      let low=document.querySelector(".low")
      low=document.addEventListener("click",()=>{
      let sortdata=filterdata.sort((a,b)=>a.price-b.price)
      cardlist(sortdata)
})
    }
      else{
        fetdata()
        let low=document.querySelector(".low")
        low=document.addEventListener("click",()=>{
        let sortdata=productdata.sort((a,b)=>a.price-b.price)
        cardlist(sortdata)
})
      }
  },50)
})


let bags=document.getElementById("adding-bag");

bags.addEventListener("click",(event)=>{
   if (event.target.classList.contains("Add-cart-button")) {
    
    let id = event.target.dataset.id
    console.log(id)

    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // post data in cart

        fetch("http://localhost:3000/cartpage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => alert("Data added into Bag"))
          .catch((err) => alert("Someting went wrong"));
      })
      .catch((err) => console.log(err));
     }else{
      console.log("id is not get")
     }
})













