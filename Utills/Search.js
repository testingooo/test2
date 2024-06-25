import { searchValue, saveSearchValue } from "../Datas/Search-data.js";


export function searchFunc() {
  const searchEl = document.querySelector('.player-details input');

  document.querySelector('.search').addEventListener('click', () => {
 
    if (searchEl.value) {
      searchValue[0] = searchEl.value
      saveSearchValue();
      window.location.href = 'search.html'
    };
  });

  searchEl.addEventListener('keyup', (ev) => {

    if (ev.key === 'Enter' || ev.key === 'Return') {
      console.log('hii');
      if (searchEl.value) {
        searchValue[0] = searchEl.value
        saveSearchValue();
        window.location.href = 'search.html'
      };
    }
  });
};