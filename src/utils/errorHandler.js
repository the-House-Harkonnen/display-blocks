/* eslint-disable no-nested-ternary */
import { toast } from 'react-toastify';

const errorNotifications = {
  'Bad request ': 400,
  'Unauthorized ': 401,
  'Current address is not found in the network ': 404,
  'Internal Server Error ': 500,
};

const availableCodes = Object.values(errorNotifications);

export const errorHandler = (error) => {
  const message = !error.response
    ? error.message
    : availableCodes.includes(error.response.status)
    ? Object.keys(errorNotifications).find(
        (key) => errorNotifications[key] === error.response.status,
      )
    : 'Unknown error';

  toast.error(message);
};
