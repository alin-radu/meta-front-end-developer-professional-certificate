import { Formik, Form } from 'formik';

import { validationSchema } from 'forms/validations/BookingFormValidation';
import { OCASSION_OPTIONS, TIME_OPTIONS } from 'pages/utils/constants';

import { FormControl } from 'components/forms/FormControl/FormControl';
import { ButtonSubmitBasic } from 'components/forms/ButtonSubmitBasic/ButtonSubmitBasic';

import styles from 'styles/_form-primary.module.scss';

const initialValues = {
  email: '',
  date: null,
  time: TIME_OPTIONS[0].value,
  guests: 1,
  occasion: OCASSION_OPTIONS[0].value,
};

export const BookingForm = () => {
  const onSubmitHandler = (values) => {
    console.log('%c-> developmentConsole: values=====> ', 'color:#77dcfd', values);
  };

  return (
    <div className={styles['form-primary-styles']}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount
        initialErrors={{ email: 'Required' }}
        onSubmit={onSubmitHandler}
      >
        {(formik) => (
          <Form>
            <FormControl
              control="input"
              name="email"
              type="email"
              label="Email Address"
              styles={styles}
            />
            <FormControl
              control="date"
              name="date"
              type="date"
              label="Choose Date"
              styles={styles}
            />
            <FormControl
              control="select"
              name="time"
              type="time"
              label="Choose Time"
              options={TIME_OPTIONS}
              styles={styles}
            />
            <FormControl
              control="input"
              name="guests"
              type="number"
              label="Number Of Guests"
              min="1"
              max="10"
              styles={styles}
            />
            <FormControl
              control="select"
              name="occasion"
              type="occasion"
              label="Occasion"
              options={OCASSION_OPTIONS}
              styles={styles}
            />
            <ButtonSubmitBasic disabled={!formik.isValid} styles={styles}>
              Make Your reservation
            </ButtonSubmitBasic>
          </Form>
        )}
      </Formik>
    </div>
  );
};
