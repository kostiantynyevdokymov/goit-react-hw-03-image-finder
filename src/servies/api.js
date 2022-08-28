const KEY = '29416001-edf5b9fce9a2c065fd7aa2dad';

const getImage = (query, page) =>
  fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(responce => responce.json());

export default getImage;
