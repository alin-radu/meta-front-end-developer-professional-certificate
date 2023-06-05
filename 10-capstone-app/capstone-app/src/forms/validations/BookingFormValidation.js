import { object, string, number } from 'yup';

export const validationSchema = object({
  email: string().email('Invalid email address').required('Required'),
  date: string().required('Required'),
  time: string().required('Required'),
  guests: number().required('Required'),
  occasion: string().required('Required'),
});
