/* eslint-disable no-console */
import React, { Fragment } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styles from './Crumbs.module.scss';
import { useThemeContext } from '../../contexts/themeContext';

export const Crumbs = () => {
  const [{ theme }] = useThemeContext();
  const history = useHistory();
  const location = useLocation();
  const pages = location.pathname.slice(1).split('/');
  const current = pages.slice(-1);
  const links = pages.slice(0, -1).reduce((acc, el) => {
    const link = acc.join('').concat(`/${el}`);
    acc.push(link);
    return acc;
  }, []);

  return (
    <div className={styles.container}>
      {links.map((el, i) => {
        const key = `key-${el}-${i}`;
        return (
          <Fragment key={key}>
            <>
              <span
                className={styles.link}
                style={{ color: theme.color }}
                role='link'
                onClick={() => history.push(el)}
                onKeyDown={() => history.push(el)}
                tabIndex={0}
              >
                {pages[i]}
              </span>
              <span
                className={styles.arrow}
                style={{ color: theme.color }}
              >{`>`}</span>
            </>
          </Fragment>
        );
      })}
      <span className={styles.current} style={{ color: theme.color }}>
        {current}
      </span>
    </div>
  );
};
