import { SearchFormInputStyle } from './SearchbarForm.styled';
import PropTypes from 'prop-types';

const SearchFormInput = ({ onChange, value }) => (
  <SearchFormInputStyle
    type="text"
    name="search"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Enter keyword"
    required
    placeholder="Enter keyword"
    onChange={onChange}
    value={value}
  />
);

export default SearchFormInput;

SearchFormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
