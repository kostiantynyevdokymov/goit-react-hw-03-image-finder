const KEY = '29416001-edf5b9fce9a2c065fd7aa2dad';

const getImage = (query, page) =>
  fetch(
    `https://pixabay.com/api/?q=cat&page=1&${KEY}&image_type=photo&orientation=horizontal&per_page=1https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=122`
  ).then(responce => responce.json());

export default getImage;
