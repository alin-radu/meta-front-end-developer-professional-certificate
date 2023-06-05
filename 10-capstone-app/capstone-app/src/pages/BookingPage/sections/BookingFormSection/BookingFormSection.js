import { BookingForm } from '../../components/BookingForm/BookingForm';

import styles from './BookingFormSection.module.scss';

export const BookingFormSection = () => (
  <div className={styles['section-container']}>
    <h3>Booking</h3>
    <BookingForm />
  </div>
);
