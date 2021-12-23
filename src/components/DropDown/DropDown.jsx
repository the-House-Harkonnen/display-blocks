/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './DropDown.module.scss';

export const DropDown = ({ name, options, callBack }) => {
  const [showBody, setShowBody] = useState(false);
  const onclick = (value) => {
    callBack(value);
    setShowBody(false);
  };

  const wrapperRef = useRef(null);

  const close = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      e.stopImmediatePropagation();
      setShowBody(false);
    }
  };

  useEffect(() => {
    if (wrapperRef.current) {
      document.addEventListener('click', close, true);
    }
    return () => {
      document.removeEventListener('click', close, true);
    };
  });

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
        <div className={styles.dropdown__wrapper}>
          <ul ref={wrapperRef} className={styles.dropdown__body}>
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
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  callBack: PropTypes.func.isRequired,
};
