import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);
const cardsMarkup = createGallery(galleryItems);
gallery.insertAdjacentHTML(`beforeend`, cardsMarkup);

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
      `<div class="gallery__item">
                <a class = "gallery__link" href= "${original}">
                <img  class="gallery__image"
                src="${preview}" 
                alt = "${description}" 
                data-source = "${original}"
                onclick = "return false">
            </a>
         </div>`)
    .join("");
};

gallery.addEventListener(`click`, onGalleryClick);

function onGalleryClick(evt) {
    // console.log(evt.target);
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    const largeImg = basicLightbox.create(
        `<img src="${evt.target.dataset.source}"
        `)
        .show()
}

// console.log(basicLightbox);