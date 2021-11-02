/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import icon from '../../imgs/icon.png';
import styles from './Cell.module.scss';

export const HCell = ({ str }) => <th>{str}</th>;

export const LBCell = ({ cell }) => {
  const history = useHistory();
  return (
    <td
      role='link'
      aria-label='link'
      onClick={() => history.push(`/home/blocks/${cell}`)}
      onKeyPress={() => history.push(`/home/blocks/${cell}`)}
    >
      {cell}
    </td>
  );
};

export const ICell = ({ src, name, alt }) => (
  <td>
    <div className={styles.icell}>
      <img
        src={src}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = icon;
        }}
        alt={alt}
      />
      <span>{name || 'tezos backer'}</span>
    </div>
  </td>
);
