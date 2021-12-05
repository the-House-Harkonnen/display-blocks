/* eslint-disable no-console */
/* eslint-disable no-debugger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useThemeContext } from '../../contexts/themeContext';
import styles from './DropDown.module.scss';

export const DropDown = ({ name, options, callBack }) => {
  const [showBody, setShowBody] = useState(false);
  const [{ theme }] = useThemeContext();
  const onclick = (value) => {
    callBack(value);
    setShowBody(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        type='button'
        className={styles.dropdown__head}
        onClick={() => setShowBody(!showBody)}
      >
        {name} <div className={styles.dropdown__arrow} />
      </button>
      {showBody && (
        <ul
          className={styles.dropdown__body}
          style={{ backgroundColor: theme.backgroundColor }}
        >
          {options.map((option) => (
            <li className={styles.dropdown__option} key={option}>
              <button
                className={styles.dropdown__btn}
                type='button'
                onClick={() => onclick(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  callBack: PropTypes.func.isRequired,
};
