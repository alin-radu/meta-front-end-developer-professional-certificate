import { ConfirmationMessage } from './sections/ConfirmationMessage/ConfirmationMessage';

export const BookingReservationPage = (props) => {
  const { formData } = props;

  return <ConfirmationMessage formaData={formData} />;
};
