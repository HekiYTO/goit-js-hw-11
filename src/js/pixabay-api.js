import axios from "axios";

const API_KEY = "54627953-91354900f2659ddc705c1dc29";

function getImagesByQuery(query) {
  return axios.get("https://pixabay.com/api/", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true
    }
  })
  .then(response => response.data.hits);
}

export default { getImagesByQuery };