import numeral from 'numeral';

export const convertBlockId = (num) => numeral(num).format('0,0');
