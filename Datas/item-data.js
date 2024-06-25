export let itemData = JSON.parse(localStorage.getItem('itemdata')) || ['']

export function saveItemData() {
  localStorage.setItem('itemdata', JSON.stringify(itemData))
}