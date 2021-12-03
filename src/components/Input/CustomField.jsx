/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

export const CustomField = ({ name }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <div>
          <input type='text' {...field} placeholder='First Name' />
          {meta.touched && meta.error && (
            <div className='error'>{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
};

CustomField.propTypes = {
  name: PropTypes.string.isRequired,
};
