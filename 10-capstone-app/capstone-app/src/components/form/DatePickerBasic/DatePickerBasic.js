import { Field, ErrorMessage } from 'formik';
import DateView from 'react-datepicker';

import { TextError } from '../TextError/TextError';

import 'react-datepicker/dist/react-datepicker.css';
import { getFormatedDate } from 'utils/helpers';

export const DatePickerBasic = (props) => {
  const { label, name, styles, onChangeAction = null, ...rest } = props;

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
              placeholderText="YYYY-MM-DD"
              dateFormat="yyyy-mm-dd"
              onChange={(val) => {
                const formatedDate = getFormatedDate(val);
                const callbackFunc = () => setFieldValue(name, formatedDate);

                if (onChangeAction) {
                  onChangeAction(formatedDate, setFieldValue, callbackFunc);
                } else {
                  callbackFunc();
                }
              }}
              minDate={new Date()}
              autoComplete="off"
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
