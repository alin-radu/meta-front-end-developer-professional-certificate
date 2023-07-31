import styles from './ConfirmationMessage.module.scss';

export const ConfirmationMessage = (props) => {
  return (
    <div className={styles['section-container']}>
      <h3>Booking Confirmed</h3>
    </div>
  );
};
