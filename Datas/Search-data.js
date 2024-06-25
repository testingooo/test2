export let searchValue = JSON.parse(localStorage.getItem('searchValue2')) || ['']


export function saveSearchValue() {
  localStorage.setItem('searchValue2', JSON.stringify(searchValue))
}

export let searchResult = JSON.parse(localStorage.getItem('searchresult2'))

export function saveSearchResult() {
  localStorage.setItem('searchresult2', JSON.stringify(searchResult))
}