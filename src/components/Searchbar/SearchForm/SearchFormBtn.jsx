import { SearchFormBtnStyled } from './SearchbarForm.styled';
import { BiSearchAlt2 } from 'react-icons/bi';

const SearchFormBtn = () => (
  <SearchFormBtnStyled type="submit">
    <BiSearchAlt2 size="36" />
  </SearchFormBtnStyled>
);

export default SearchFormBtn;
