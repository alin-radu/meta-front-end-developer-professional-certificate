import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './BasicButton.module.scss';

export const BasicButton = (props) => {
  const {
    type = 'btn-primary',
    onClickActions = null,
    linkTo = null,
    animation = false,
    children,
  } = props;

  const animationClass = animation ? styles.animation : '';

  const classes = `${styles.btn} ${styles[type]} ${animationClass}`;
  const buttonElement = linkTo ? <Link to={linkTo}>{children}</Link> : children;

  return (
    <button className={classes} onClick={onClickActions}>
      {buttonElement}
    </button>
  );
};

BasicButton.propTypes = {
  type: PropTypes.oneOf(['btn-primary', 'btn-secondary']),
  onClickActions: PropTypes.func,
  linkTo: PropTypes.string,
  animation: PropTypes.bool,
  children: PropTypes.string.isRequired,
};
