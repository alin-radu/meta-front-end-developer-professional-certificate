import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './BasicButton.module.scss';

export const BasicButton = (props) => {
  const { type = 'btn-primary', onClickActions = null, linkTo = null, children } = props;

  const classes = `${styles.btn} ${styles[type]}`;
  const buttonElement = linkTo ? <Link to={linkTo}>{children}</Link> : children;

  return (
    <button className={classes} onClick={onClickActions}>
      {buttonElement}
    </button>
  );
};

BasicButton.propTypes = {
  type: PropTypes.oneOf(['btn-primary']),
  onClickActions: PropTypes.func,
  linkTo: PropTypes.string,
  children: PropTypes.string.isRequired,
};
