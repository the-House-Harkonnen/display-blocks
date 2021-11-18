import dayjs from 'dayjs';

export const convertTimestamp = (num) =>
  dayjs.unix(num).format('YYYY.MM.DD  HH:mm:ss');
