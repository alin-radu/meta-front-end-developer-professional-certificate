import { Field, ErrorMessage } from 'formik';
import DateView from 'react-datepicker';

import { TextError } from '../TextError/TextError';

import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerBasic = (props) => {
  const { label, name, styles, ...rest } = props;

  return (
    <div className={styles['input-styles']}>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {(props) => {
          const { form, field } = props;
          const { setFieldValue } = form;
          const { value } = field;
          const inputDate = value ? new Date(value) : null;

          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={inputDate}
              placeholderText="MM-DD-YYYY"
              dateFormat="MM-dd-yyyy"
              onChange={(val) => {
                const formatedDate = val.toISOString().slice(0, 10);
                setFieldValue(name, formatedDate);
              }}
            />
          );
        }}
      </Field>
      <ErrorMessage
        name={name}
        render={(msg) => <TextError styles={styles}>{msg}</TextError>}
      />
    </div>
  );
};
