import { moreProducts } from "../Datas/products.js";
import { searchValue } from "../Datas/Search-data.js";

let searchResult = JSON.parse(localStorage.getItem('searchresult2'))

function saveSearchResult() {
  localStorage.setItem('searchresult2', JSON.stringify(searchResult))
}

let itemData = JSON.parse(localStorage.getItem('itemdata')) || ['']

function saveItemData() {
  localStorage.setItem('itemdata', JSON.stringify(itemData))
}

let productSearch = [];
moreProducts.forEach(product => {
  product.keyword.forEach(word => {
    if (word.toLowerCase().includes(searchValue[0].toLowerCase())) {
      productSearch.push(product);
      return 
    } else {

    }
  });  
});
searchResult = productSearch;
saveSearchResult();
document.querySelector('.search-value').innerHTML =`"${searchValue}"`

document.title = searchValue
document.querySelector('.products')
  .innerHTML = searchResult.map(({id, img, cp, bonus, price, discountPrice}) => {
    return `
      <a href="#">
        <div class="product product-${id}" data-id="${id}">
          <div class="cp">
            <span>${cp}</span>
            <small>${bonus}</small>
          </div>
          <img src="${img}" alt="">
          <div class="price">
            <span class="cp-price">${price}</span>
            <span>${(discountPrice)}</span>
          </div>
        </div>
      </a>
    `
  }).join('');


document.querySelectorAll('.product').forEach(elem => {
  elem.addEventListener('click', () => {
    const id = elem.dataset.id
    console.log(id);
    itemData = id
    saveItemData();
    window.location.href = 'item.html'
  })
})

// console.log(itemData);