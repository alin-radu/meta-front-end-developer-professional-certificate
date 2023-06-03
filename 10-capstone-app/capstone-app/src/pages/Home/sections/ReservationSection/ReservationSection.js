import { BasicButton } from 'components/UI/buttons/BasicButton/BasicButton';

import styles from './ReservationSection.module.scss';

export const ReservationSection = () => {
  return (
    <section className={styles['section-container']}>
      <div className={styles['elements-container']}>
        <div className={styles['left-side']}>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes
            served with a modern twist.
          </p>
          <BasicButton linkTo="/booking" type="btn-primary" animation={true}>
            Reserve a Table
          </BasicButton>
        </div>
        <div className={styles['right-side']}></div>
      </div>
    </section>
  );
};
