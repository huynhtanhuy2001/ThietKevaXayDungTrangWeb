
const listProduct = [
  {   
      id:"1",
      name: "Áo",
      name2:"Áo váy",
      price: "250.000",
      img: "1.jpg"
  },
  {  id:"9",
      name: "Áo",
      name2:"Áo quan",
      price: "250.000",
      img: "2.jpg"
  },
  {  id:"2",
      name: "Áo",
      name2:"Áo váy",
      price: "250.000",
      img: "3.jpg"
  },
  {  id:"3",
      name: "Áo",
      name2:"Áo váy",
      price: "250.000",
      img: "4.jpg"
  },
  {  id:"4",
      name: "Áo",
      name2:"Áo váy",
      price: "250.000",
      img: "5.jpg"
  },
  {  id:"5",
      name: "Áo",
      name2:"Áo quan",
      price: "250.000",
      img: "6.jpg"
  },
  {  id:"6",
      name: "Áo",
      name2:"Áo váy",
      price: "250.000",
      img: "7.jpg"
  },
  {  id:"7",
      name: "Áo",
      name2:"Áo váy",
      price: "250.000",
      img: "8.jpg"
  },
  {  id:"8",
      name: "Áo",
      name2:"Áo váy",
      price: "250.000",
      img: "9.jpg"
  },
  {   id:"9",
      name: "Áo",
      name2:"Áo quan",
      price: "250.000",
      img: "10.jpg"
  },
  {   id:"10",
      name: "Áo",
      name2:"Áo váy",
      price: "250.000",
      img: "10.jpg"
  },
  {   id:"11",
      name: "Áo",
      name2:"Áo váy",
      price: "250.000",
      img: "10.jpg"
  },
  {   id:"12",
      name: "Áo",
      name2:"Áo váy",
      price: "250.000",
      img: "1.jpg"
  },
  {   id:"13",
      name: "Áo",
      name2:"Áo quan",
      price: "250.000",
      img: "2.jpg"
  },
  {   id:"14",
      name: "Áo",
      name2:"Áo váy",
      price: "250.000",
      img: "3.jpg"
  },
  {   id:"15",
      name: "Áo",
      name2:"Áo váy",
      price: "250.000",
      img: "10.jpg"
  },

]
const listProductNam = [...listProduct];
const domULNam= document.querySelector(".products-Nam")
const ulNam = listProductNam.map((item)=>`<li>
                  <div class="product-item">
                  <div class="product-top">
                      <a href="./product-detail.html" class="product-thumb">
                          <img src="./img/donu/${item.img}" alt="">
                      </a>
                      <a href="" onclick="add()" class="buy-now">Thêm vào giỏ hàng</a>
                  </div>
                  <div class="product-info">
                      <a href="" class="product-cat">${item.name}</a>
                      <a href="" class="product-name">${item.name2} </a>
                      <div class="product-price">$ ${item.price}</div>
                  </div>
                   </div>
              </li>`)
              if(domULNam)
              {
                domULNam.innerHTML = ulNam.join('');
               
              }


/**********************ĩndex********************************/


const listProductIndex = [
  listProduct[0],
  listProduct[2],
  listProduct[3],
  listProduct[4],
]
function add(id){
 const itemcart =  listProductIndex[id]
 console.log(itemcart)
 listcart.push(itemcart)
 save(listcart)
 alert("them thanh cong")
 console.log(listcart)
}
function save(listcart){
  localStorage.setItem("DATACART",JSON.stringify(listcart)) 
}
const domULIndex= document.querySelector(".products-1")
const ulIndex = listProductIndex.map((item,index)=>`<li>
                  <div class="product-item">
                  <div class="product-top">
                      <a href="./product-detail.html" class="product-thumb">
                          <img class="img-prd" src="./img/donu/${item.img}" alt="">
                      </a>
                      <a onclick="add(${index})" class="buy-now btn-cart">Thêm vào giỏ hàng</a>
                  </div>
                  <div class="product-info">
                      <a href="" class="product-cat">${item.name}</a>
                      <a href="" class="product-name">${item.name2} </a>
                      <div class="product-price price">$ ${item.price}</div>
                  </div>
                   </div>
              </li>`)
if(domULIndex)
{
  domULIndex.innerHTML = ulIndex.join('');
}


const listProduct2 = [
    listProduct[5],
    listProduct[6],
    listProduct[7],
    listProduct[8],
]
const domUL2= document.querySelector(".products-2")
const ul2 = listProduct2.map((item)=>`<li>
                  <div class="product-item">
                  <div class="product-top">
                      <a href="./product-detail.html" class="product-thumb">
                          <img src="./img/donu/${item.img}" alt="">
                      </a>
                      <a class="buy-now">Thêm vào giỏ hàng</a>
                  </div>
                  <div class="product-info">
                      <a href="" class="product-cat">${item.name}</a>
                      <a href="" class="product-name">${item.name2} </a>
                      <div class="product-price">$ ${item.price}</div>
                  </div>
                   </div>
              </li>`)
if(domUL2)
{
  domUL2.innerHTML = ul2.join('');
}
/**********************Nu********************************/

const listProductNu = [...listProduct];
const domULNu= document.querySelector(".products-Nu")
const ulNu = listProductNu.map((item)=>`<li>
                  <div class="product-item">
                  <div class="product-top">
                      <a href="./product-detail.html" class="product-thumb">
                          <img src="./img/donu/${item.img}" alt="">
                      </a>
                      <a href="" onclick="add()" class="buy-now">Thêm vào giỏ hàng</a>
                  </div>
                  <div class="product-info">
                      <a href="" class="product-cat">${item.name}</a>
                      <a href="" class="product-name">${item.name2} </a>
                      <div class="product-price">$ ${item.price}</div>
                  </div>
                   </div>
              </li>`)
if(domULNu){
  domULNu.innerHTML = ulNu.join('');
}

/**************************product-detail*********************************/

$("ul li:nth-child(1)").click(function(){
  $(".left-set img:nth-child(1)").animate({
    opacity: 0
  })
})

$("ul li:nth-child(2)").click(function(){
  $(".left-set img:nth-child(2)").animate({
    opacity: 0
  })
})
$("ul li:nth-child(2)").click(function(){
  $(".left-set img:nth-child(1)").animate({
    opacity: 1
  })
})
$("ul li:nth-child(1)").click(function(){
  $(".left-set img:nth-child(2)").animate({
    opacity: 1
  })
})



/**************************************************************************/

var listcart = JSON.parse(localStorage.getItem("DATACART")) || [];


//const SETDATA = localStorage.setItem("DATACART",JSON.stringify()) || []

const cart_items = document.querySelector('.cart-items')
function deletecart(id){
listcart.splice(id,1)
 save(listcart);

 let listcarts = JSON.parse(localStorage.getItem("DATACART")).map((item,index) => `<div> <div class="cart-row">
 <div class="cart-item cart-column">
     <img class="cart-item-image" src="./img/donu/${item.img}" width="100" height="100">
     <span class="cart-item-title">${item.name}</span>
 </div>
 <span class="cart-price cart-column">${item.price}</span>
 <div class="cart-quantity cart-column">
     <input class="cart-quantity-input" type="number" value="1">
     <button class="btn btn-danger" type="button" onclick=deletecart(${index})>Xóa</button>
 </div>
 </div>
 `
  )
  if(cart_items){

   cart_items.innerHTML = listcarts.join('');
  }

}

  let listcarts = JSON.parse(localStorage.getItem("DATACART")).map((item,index) => `<div> <div class="cart-row">
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="./img/donu/${item.img}" width="100" height="100">
      <span class="cart-item-title">${item.name}</span>
  </div>
  <span class="cart-price cart-column">${item.price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button" onclick=deletecart(${index})>Xóa</button>
  </div>
  </div>
  `
   )
   if(cart_items){
    cart_items.innerHTML = listcarts.join('');
   }



  function updatecart() {
        var cart_item = document.getElementsByClassName("cart-items")[0];
        var cart_rows = cart_item.getElementsByClassName("cart-row");
        var total = 0;
        for (var i = 0; i < cart_rows.length; i++) {
          var cart_row = cart_rows[i]
          var price_item = cart_row.getElementsByClassName("cart-price")[0];
          var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0];
          var price = parseFloat(price_item.innerText);
          var quantity = quantity_item.value;
          total = total + (price * quantity);
        }
          document.getElementsByClassName("cart-total-price")[0].innerText = total + '.000 VNĐ'
        
        }
      var quantity_input = document.getElementsByClassName("cart-quantity-input");
      for (var i = 0; i < quantity_input.length; i++) {
        var input = quantity_input[i];
        input.addEventListener("change", function (event) {
          var input = event.target
          if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
          }
          updatecart()
        })
      }
      var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart();
  })
}

//  function remove(){localStorage.removeItem("DATACART")}
//  remove();