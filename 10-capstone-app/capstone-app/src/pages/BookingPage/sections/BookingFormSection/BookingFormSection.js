import { BookingForm } from '../../components/BookingForm/BookingForm';

import styles from './BookingFormSection.module.scss';

export const BookingFormSection = (props) => {
  const { availableTimes, setAvailableTimes } = props;

  return (
    <div className={styles['section-container']}>
      <h3>Booking</h3>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </div>
  );
};
