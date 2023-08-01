/* eslint-disable jsx-a11y/img-redundant-alt */
import UnderConstructionPageImg from 'assets/images/under-construction-image.webp';

import styles from './UnderConstructionPage.module.scss';

export const UnderConstructionPage = (props) => {
  return (
    <div className={styles['section-container']}>
      <img
        src={UnderConstructionPageImg}
        alt="Under Construction Page Image"
        width="750px"
        height="440px"
      />
    </div>
  );
};