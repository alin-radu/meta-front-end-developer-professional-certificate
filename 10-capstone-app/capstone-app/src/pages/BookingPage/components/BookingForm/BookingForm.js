import { Formik, Form } from 'formik';

import { validationSchema } from 'forms/validations/BookingFormValidation';
import { getFormatedDate } from 'utils/helpers';
import { OCASSION_OPTIONS, TIME_OPTIONS } from 'utils/constants';

import { FormControl } from 'components/form/FormControl/FormControl';
import { ButtonSubmitBasic } from 'components/form/ButtonSubmitBasic/ButtonSubmitBasic';

import styles from 'styles/_form-primary.module.scss';

const currentDate = getFormatedDate(new Date());

export const BookingForm = (props) => {
  const { setIsLoading, availableTimes, setAvailableTimes } = props;

  const initialValues = {
    email: '',
    date: null,
    time: availableTimes[currentDate][0].value,
    guests: 1,
    occasion: OCASSION_OPTIONS[0].value,
  };

  const onSubmitHandler = (values, formikHelpers) => {
    const selectedDate = values.date;
    const selectedTime = values.time;
    const isSelectedDate = selectedDate in availableTimes;

    let updatedAvailableTime;
    if (isSelectedDate) {
      updatedAvailableTime = availableTimes[selectedDate].filter(
        (item) => item.value !== selectedTime
      );
    } else {
      updatedAvailableTime = TIME_OPTIONS.filter((item) => item.value !== selectedTime);
    }

    setIsLoading(true);
    setTimeout(() => {
      setAvailableTimes({
        ...availableTimes,
        [selectedDate]: updatedAvailableTime,
      });
      formikHelpers.resetForm();
      setIsLoading(false);
    }, 1000)
  };

  const onChangeDateHandler = (selectedDate, setFieldValue, callbackFunc) => {
    if (availableTimes[selectedDate]) {
      setFieldValue('time', availableTimes[selectedDate][0].value);
    } else {
      setFieldValue('time', TIME_OPTIONS[0].value);
    }
    callbackFunc();
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
        {(formik) => {
          const selectedDate = formik.values.date;
          let availableTimesOptions;
          if (selectedDate && availableTimes[selectedDate]) {
            availableTimesOptions = availableTimes[selectedDate];
          } else {
            availableTimesOptions = TIME_OPTIONS;
          }

          return (
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
                onChangeAction={onChangeDateHandler}
              />
              <FormControl
                control="select"
                name="time"
                type="time"
                label="Choose Time"
                options={availableTimesOptions}
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
          );
        }}
      </Formik>
    </div>
  );
};
