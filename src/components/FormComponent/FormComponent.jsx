import React, { Fragment } from 'react';
import { Field, Form } from 'formik';
import PropTypes from 'prop-types';
import styles from './FormComponent.module.scss';
import { useThemeContext } from '../../contexts/themeContext';
import { InputGroup } from '../Input/InputGroup';
import { Input } from '../Input';

export const FormComponent = ({ fields, children }) => {
  const [{ theme }] = useThemeContext();
  return (
    <Form
      className={styles.form}
      style={{
        border: theme.tableBorder,
      }}
    >
      <fieldset className={styles.form__group}>
        {fields.map((el, i) => {
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
        })}
      </fieldset>
      <input
        className={styles.form__btn}
        style={{
          backgroundColor: theme.formBtn,
        }}
        type='submit'
        value='Submit'
      />
      {children}
    </Form>
  );
};

FormComponent.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      render: PropTypes.func,
      type: PropTypes.string,
    }),
  ).isRequired,
  children: PropTypes.node,
};

FormComponent.defaultProps = {
  children: '',
};
