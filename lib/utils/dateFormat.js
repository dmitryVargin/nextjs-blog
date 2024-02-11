import { format } from 'date-fns-tz';

const dateFormat = (date) => {
  return format(new Date(date), 'dd.MM.yyyy');
};

export default dateFormat;
