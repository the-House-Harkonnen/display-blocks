/* eslint-disable consistent-return */
import { Field } from 'formik';
import React, { Fragment } from 'react';
import * as yup from 'yup';
import { Input } from '../components/Input';
import { InputGroup } from '../components/Input/InputGroup';

export class FormCreator {
  constructor(fields) {
    this.fields = fields;
  }

  getInitialValues() {
    return this.fields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});
  }

  validationSchema() {
    const schema = this.fields.reduce((acc, field) => {
      if (field.validation) {
        acc[field.name] = field.validation;
      }

      return acc;
    }, {});
    return yup.object(schema);
  }

  renderFields() {
    return this.fields.map((el, i) => {
      const key = `${i}-key`;
      return (
        <Fragment key={key}>
          {el.render ? (
            el.render()
          ) : (
            <Field name={el.name} key={key}>
              {({ meta, field }) => {
                return (
                  <InputGroup name={el.name} label={el.label} meta={meta}>
                    <Input
                      placeholder={el.placeholder}
                      field={field}
                      type={el.type}
                    />
                  </InputGroup>
                );
              }}
            </Field>
          )}
        </Fragment>
      );
    });
  }
}
