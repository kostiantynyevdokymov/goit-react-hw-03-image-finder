import { SearchFormStyled } from './SearchbarForm.styled';
import { Component } from 'react';
import SearchFormInput from './SearchbarInput';
import PropTypes from 'prop-types';
import SearchFormBtn from './SearchFormBtn';

class SearchForm extends Component {
  state = {
    searchText: '',
  };
  handleChange = event => {
    this.setState({ searchText: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchText);
  };
  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <SearchFormBtn />
        <SearchFormInput
          onChange={this.handleChange}
          value={this.state.searchText}
        />
      </SearchFormStyled>
    );
  }
}

export default SearchForm;

SearchForm.propType = {
  searchText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
