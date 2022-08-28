import { ImageGalleryItemImageStyled } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItemImg = ({ src }) => (
  <ImageGalleryItemImageStyled src={src} />
);

export default ImageGalleryItemImg;

ImageGalleryItemImg.propType = {
  src: PropTypes.string.isRequired,
};
