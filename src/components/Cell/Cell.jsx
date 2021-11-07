/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import icon from '../../imgs/icon.png';
import styles from './Cell.module.scss';

export const HCell = ({ str }) => <th className={styles.blue}>{str}</th>;

export const LBCell = ({ cell }) => {
  const history = useHistory();
  return (
    <td
      className={styles.blue}
      role='link'
      aria-label='link'
      onClick={() => history.push(`/home/blocks/${cell}`)}
      onKeyPress={() => history.push(`/home/blocks/${cell}`)}
    >
      {cell}
    </td>
  );
};

export const ICellLinc = ({ src, name, alt, href }) => {
  const history = useHistory();
  const url =
    name && src
      ? `https://teztracker.com/static/validators-logo/${src}.png`
      : icon;

  return (
    <td
      className={styles.blue}
      role='link'
      aria-label='link'
      onClick={() => history.push(`/home/blocks/${href}`)}
      onKeyPress={() => history.push(`/home/blocks/${href}`)}
    >
      <div className={styles.icell}>
        <img
          src={url}
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
};

export const ICell = ({ src, name, alt }) => {
  const url = src
    ? `https://teztracker.com/static/validators-logo/${src}.png`
    : icon;

  return (
    <td>
      <div className={styles.icell}>
        <img
          src={url}
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
};

export const SHCell = ({ str, sort, callBack }) => {
  const className =
    !sort.inc && sort.key === str ? styles.arrowup : styles.arrowdown;
  const action = {
    type: sort.inc ? 'decrement' : 'increment',
    key: str,
  };
  return (
    <th onClick={() => callBack(action)} className={styles.cell}>
      <div className={styles.container}>
        <span className={styles.text}>{str}</span>
        <span className={className} />
      </div>
    </th>
  );
};

SHCell.propTypes = {
  str: PropTypes.string.isRequired,
  sort: PropTypes.shape({
    key: PropTypes.string.isRequired,
    inc: PropTypes.bool.isRequired,
  }).isRequired,
  callBack: PropTypes.func.isRequired,
};

HCell.propTypes = {
  str: PropTypes.string.isRequired,
};

LBCell.propTypes = {
  cell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

ICellLinc.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ICellLinc.defaultProps = {
  src: '',
  name: '',
  alt: '',
  href: '',
};

ICell.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
};

ICell.defaultProps = {
  src: '',
  name: '',
  alt: '',
};
