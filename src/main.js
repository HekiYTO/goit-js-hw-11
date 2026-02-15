import pixbayApi from "./js/pixabay-api";
import render from "./js/render-functions";
import iziToast from 'izitoast';

let button = document.querySelector('button')
button.addEventListener('click', () => {
  event.preventDefault();
  const query = document.querySelector('input').value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
      titleColor: "#fff",
      messageColor: "#fff",
      position: 'topRight'
    });
    return;
  }

  render.clearGallery();
  render.showLoader();

  pixbayApi.getImagesByQuery(query)
    .then(images => {
      render.hideLoader();
      if (images.length === 0) {
        iziToast.error({
          title: 'No results',
          message: 'Sorry, there are no images matching your search query. Please, try again!',
          titleColor: "#fff",
          messageColor: "#fff",
          backgroundColor: "#EF4040",
          position: 'topRight'
        });
        return;
      }
      render.createGallery(images);
    })
    .catch(error => {
      render.hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again.',
        titleColor: "#fff",
        messageColor: "#fff",
        backgroundColor: "#EF4040",
        position: 'topRight'
      });
    });
});