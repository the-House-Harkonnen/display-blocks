/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { convertBlockId } from '../../utils/convertBlockId';
import icon from '../../imgs/icon.png';
import styles from './Cell.module.scss';

export const CellTh = ({ str }) => <th>{str}</th>;
CellTh.propTypes = {
  str: PropTypes.string.isRequired,
};

export const CellLinkOption = ({ cell }) => {
  const history = useHistory();
  return (
    <span
      className={styles.icon__span}
      role='link'
      aria-label='link'
      onClick={() => history.push(`/home/blocks/${cell}`)}
      onKeyPress={() => history.push(`/home/blocks/${cell}`)}
    >
      {convertBlockId(cell)}
    </span>
  );
};
CellLinkOption.propTypes = {
  cell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export const CellLinkIcon = ({ src, name, alt, href }) => {
  const history = useHistory();
  const url =
    name && src
      ? `https://teztracker.com/static/validators-logo/${src}.png`
      : icon;

  return (
    <div
      role='link'
      aria-label='link'
      onClick={() => history.push(`/home/blocks/${href}`)}
      onKeyPress={() => history.push(`/home/blocks/${href}`)}
      className={styles.icon}
    >
      <div className={styles.icon__cell}>
        <img
          className={styles.icon__img}
          src={url}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = icon;
          }}
          alt={alt}
        />
        <span className={styles.icon__baker}>{name || 'tezos baker'}</span>
      </div>
    </div>
  );
};
CellLinkIcon.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CellLinkIcon.defaultProps = {
  src: '',
  name: '',
  alt: '',
  href: '',
};

export const CellIcon = ({ src, name, alt }) => {
  const url = src
    ? `https://teztracker.com/static/validators-logo/${src}.png`
    : icon;

  return (
    <>
      <div className={styles.icon__cell}>
        <img
          className={styles.icon__img}
          src={url}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = icon;
          }}
          alt={alt}
        />
        <span className={styles.icon__baker}>{name || 'tezos baker'}</span>
      </div>
    </>
  );
};
CellIcon.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
};
CellIcon.defaultProps = {
  src: '',
  name: '',
  alt: '',
};

export const CellSortOption = ({ str, sort, callBack }) => {
  const className =
    !sort.inc && sort.key === str ? styles.arrowup : styles.arrowdown;
  const action = {
    type: sort.inc ? 'decrement' : 'increment',
    key: str,
  };
  return (
    <th onClick={() => callBack(action)}>
      <div className={styles.sort}>
        <span>{str}</span>
        <span className={className} />
      </div>
    </th>
  );
};
CellSortOption.propTypes = {
  str: PropTypes.string.isRequired,
  sort: PropTypes.shape({
    key: PropTypes.string.isRequired,
    inc: PropTypes.bool.isRequired,
  }).isRequired,
  callBack: PropTypes.func.isRequired,
};
