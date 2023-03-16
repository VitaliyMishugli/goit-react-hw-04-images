import css from '../Button/Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ pageIncrement }) => {
  return (
    <button type="button" className={css.Button} onClick={pageIncrement}>Load more</button>
  )
}

Button.propTypes = {
  pageIncrement: PropTypes.func
}