function fetchcardata()
{
    fetch("http://localhost:3000/cartpage")
    .then((res)=>res.json())
    .then((data)=>cardlist(data))
    .catch((err)=>console.log(err))
}
fetchcardata()

function cardlist(data){
    let totalcard=data.map((el)=>singleCard(el.images,el.title,el.price))
    document.getElementById("maincard").innerHTML=totalcard.join("")
}

function singleCard(images,title,price)
{
  let card=`
  <div class="card-off2 d-flex  align-items-center row">
            <div class="col-12 d-flex  justify-content-between  p-0 mb-3">
                <img src="${images[1]}" alt="" class="col-2 bag-img">
                <div class="col-5 text-start ps-4">
                    <p class="bag-p1">${title}</p>
                    <p>$${price}</p>
                </div>
                <div class="col-3 text-end delete-bag"><i class="bi bi-trash"></i></div>
            </div>
          </div>
  `

return card
}