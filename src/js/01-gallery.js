// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.style.listStyleType = 'none';
const createMarkup = galleryItems

  .map(
    item =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
          ></img>
        </a>
      </li>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', createMarkup);
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 300,
});
