/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Field } from 'formik';

export const CustomField = ({ name }) => {
  return (
    <Field name={name}>
      {({ field, form, meta }) => (
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
