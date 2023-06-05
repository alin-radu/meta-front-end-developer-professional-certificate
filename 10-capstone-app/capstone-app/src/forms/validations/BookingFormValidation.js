import { object, string, number, date } from 'yup';

export const validationSchema = object({
  email: string().email('Invalid email address').required('Required'),
  date: date().required('Required'),
  time: string().required('Required'),
  guests: number().required('Required'),
  occasion: string().required('Required'),
});
