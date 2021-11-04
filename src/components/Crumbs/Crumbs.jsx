import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styles from './Crumbs.module.scss';

export const Crumbs = () => {
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
        const key = `key-${el}`;
        return (
          <>
            <span
              className={styles.link}
              key={key}
              role='link'
              onClick={() => history.push(el)}
              onKeyDown={() => history.push(el)}
              tabIndex={0}
            >
              {pages[i]}
            </span>
            <span>{`>`}</span>
          </>
        );
      })}
      <span className={styles.current}>{current}</span>
    </div>
  );
};
