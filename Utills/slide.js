
export function slideFunction() {
  const nextEl = document.querySelector('.next')
  const prevEl = document.querySelector('.prev')
  const slideImg = document.querySelectorAll('.sliding-cont')
  const img = document.querySelector('.sliding-cont img')

  let currentImg = 1;
  let timeout;
  
  nextEl.addEventListener('click', () => {
    currentImg++
    clearTimeout(timeout);
    updateImage();

  });
  
  prevEl.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImage();
  });

  updateImage();
  
  function updateImage() {
    if (currentImg > slideImg.length) {
      currentImg = 1;
    } else if (currentImg < 1){
      currentImg = slideImg.length;
    };

    slideImg.forEach(elem => {
      elem.style.transform = `translateX(-${(currentImg - 1) * img.width }%)`;
    });

    timeout = setTimeout(() => {
      currentImg++;
      updateImage();
    },4000);
  };
};