import { Component } from 'react';
import AppStyled from './App.styled';
import getImage from '../servies/api';
import SearchForm from './Searchbar/SearchForm/SearchForm';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    gallery: [],
    page: 1,
    query: '',
    total: null,
    loading: false,
    imageURL: null,
  };
  componentDidUpdate(_, prevState) {
    if (prevState !== this.state.gallery) {
      this.setState({ loading: false });
    }
  }

  handleSubmit = query => {
    if (query.trim().length === 0) {
      return;
    }

    this.setState({ query, loading: true });

    getImage(query, this.state.page).then(data =>
      this.setState({
        gallery: [...data.hits],
        total: data.totalHits,
      })
    );
  };

  render() {
    // const { gallery, imageURL, total } = this.state;
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit} />
      </Searchbar>
    );
  }
}
