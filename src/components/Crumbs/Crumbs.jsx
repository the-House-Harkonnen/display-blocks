/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

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

  console.log(current, links, pages);
  return (
    <div>
      {links.map((el, i) => {
        const key = `key-${el}`;
        return (
          <span
            key={key}
            onClick={() => history.push(el)}
            onKeyDown={() => history.push(el)}
          >
            {`${pages[i]} >`}
          </span>
        );
      })}
      <span>{current}</span>
    </div>
  );
};
