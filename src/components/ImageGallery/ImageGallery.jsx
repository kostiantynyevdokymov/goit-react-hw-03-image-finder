import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import ImageGalleryStyled from './ImageGallery.styled';

const ImageGallery = ({ galleryList, onClick, imageURL }) => (
  <>
    <ImageGalleryStyled>
      <ImageGalleryItem
        galleryList={galleryList}
        onClick={onClick}
        imageURL={imageURL}
      />
    </ImageGalleryStyled>
  </>
);

export default ImageGallery;
