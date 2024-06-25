import { moreProducts } from "../Datas/products.js";


let itemData = JSON.parse(localStorage.getItem('itemdata')) || ['']

function saveItemData() {
  localStorage.setItem('itemdata', JSON.stringify(itemData))
}

let productmatch =  ['']
moreProducts.forEach(product => {
  if (itemData === product.id) {
    productmatch[0] = product
  }
})



document.querySelector('.products')
  .innerHTML = productmatch.map(elem => {
    document.title = elem.cp
    return `
      <div class="product">
        <div class="cp">
          <span>${elem.cp}</span>
          <small>${elem.discountPrice}</small>
        </div>
        <img src="${elem.img}" alt="">
        <!-- <div class="more-img">
          <img src="Images/IMG-20240523-WA0034.jpg" alt="">
          <img src="Images/WhatsApp Image 2024-05-11 at 03.17.46_1151e654.jpg" alt="">
          <img src="Images/IMG-20240523-WA0031.jpg" alt="">
        </div> -->
        <div class="product-bottom">
          <a href="buy-now.html">
            <button data-id="${elem.id}">Buy now</button>
          </a>
          <div class="product-details">
            <h4>Product Details</h4>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    `
  }).join('')


document.querySelector('.other-product .products')
  .innerHTML = moreProducts.map(({id, img, cp, bonus, price, discountPrice}) => {
    return `
      <div class="product item product-${id}" data-id="${id}">
        <div class="cp">
          <span>${cp}</span>
            <small>${bonus}</small>
        </div>
        <img src="${img}" alt="">
        <div class="price">
          <span class="cp-price">${price}</span>
          <small>${(discountPrice)}</small>
        </div>
      </div>
    `
  }).join('');



document.querySelectorAll('.item')
  .forEach(elem => {
    elem.addEventListener('click', () => {
      const id = elem.dataset.id

      itemData = id
      saveItemData()
      location.reload()
    })
  })


document.querySelectorAll('button')
  .forEach(elem => {
    elem.addEventListener('click', () => {
      const id = elem.dataset.id
      console.log(id);
    })
  })