import pixbayApi from "./pixabay-api";
import SimpleLightbox from "simplelightbox";

let gallery = new SimpleLightbox('.gallery a', {});

function createGallery(images) {
  const galleryContainer = document.querySelector(".gallery");

  const markup = images.map(image => {
    return `
      <li class="photo-card">
        <a href="${image.largeImageURL}">
          <img class="gal_element" src="${image.webformatURL}" alt="${image.tags}" />
        </a>

        <div class="stats">
          <div class="stat-item">
            <p class="stat-title">Likes</p>
            <p>${image.likes}</p>
          </div>

          <div class="stat-item">
            <p class="stat-title">Views</p>
            <p>${image.views}</p>
          </div>

          <div class="stat-item">
            <p class="stat-title">Comments</p>
            <p>${image.comments}</p>
          </div>

          <div class="stat-item">
            <p class="stat-title">Downloads</p>
            <p>${image.downloads}</p>
          </div>
        </div>
      </li>
    `;
  }).join("");

  galleryContainer.innerHTML = markup;
  gallery.refresh();
}

function clearGallery() {
  const galleryContainer = document.querySelector(".gallery");
  galleryContainer.innerHTML = "";
}

function showLoader() {
  const loader = document.querySelector(".loader");
  loader.classList.add("is-loading");
}

function hideLoader() {
  const loader = document.querySelector(".loader");
  loader.classList.remove("is-loading");
}

const render = {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader
}

export default render;