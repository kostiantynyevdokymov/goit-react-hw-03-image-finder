import LoaderStyled from './Loader.styled';
import { ColorRing } from 'react-loader-spinner';

const Loader = () => (
  <LoaderStyled>
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#5b90e1', '#e2cd13', '#f6f86a', '#557fb6', '#849b87']}
    />
  </LoaderStyled>
);

export default Loader;
