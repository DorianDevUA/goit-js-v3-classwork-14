/*
 * Ліниве завантаження зображень (концепція)
 * - нативна підтримка
 * - подія завантаження зображення (load)
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');
console.log(lazyImages);

lazyImages.forEach(image => image.addEventListener('load', onImageLoaded, { once: true }));

function onImageLoaded(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear');
}
