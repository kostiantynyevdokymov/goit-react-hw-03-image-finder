import { Component } from 'react';
import { OverlayStyled, ModalStyled } from './Modal.styled';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('click', this.handleBackdropClick);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('click', this.handleBackdropClick);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <OverlayStyled onClick={this.handleBackdropClick}>
        <ModalStyled>
          <img src={this.props.src} alt="" />
        </ModalStyled>
      </OverlayStyled>
    );
  }
}

export default Modal;

Modal.propType = {
  src: PropTypes.string.isRequired,
};
