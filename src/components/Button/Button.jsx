import ButtonStyled from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => (
  <ButtonStyled type="button" onClick={onClick}>
    {text}
  </ButtonStyled>
);
export default Button;

Button.propType = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
