import { BookingFormSection } from './sections/BookingFormSection/BookingFormSection';

export const BookingPage = (props) => {
  const { availableTimes, setAvailableTimes } = props;

  return (
      <BookingFormSection
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
  );
};
