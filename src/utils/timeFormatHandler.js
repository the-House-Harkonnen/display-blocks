import dayjs from 'dayjs';

export const timeFormatHandler = (num) =>
  dayjs.unix(num).format('YYYY.MM.DD  HH:mm:ss');
