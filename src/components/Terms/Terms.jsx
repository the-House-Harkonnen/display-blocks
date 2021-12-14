import React from 'react';
import PropTypes from 'prop-types';
import styles from './Terms.module.scss';
import { Checkbox } from '../Checkbox';

export const Terms = ({ name }) => {
  return (
    <div className={styles.terms__agree}>
      <Checkbox name={name} />
      <span className={styles.signup__terms}>
        By creating an account, you agree to Tezos Explorer
        <a href='#top' className={styles.terms__policy}>
          &nbsp; Terms of Service&nbsp;
        </a>
        <span>&</span>
        <a href='#top' className={styles.terms__policy}>
          &nbsp;Privacy Policy.
        </a>
      </span>
    </div>
  );
};

Terms.propTypes = {
  name: PropTypes.string.isRequired,
};
