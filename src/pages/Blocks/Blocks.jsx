/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React, { useContext, useEffect } from 'react';
import { BlocksContext } from '../../components/BlocksProvider/BlocksProvider';

export const Blocks = () => {
  const { blocks } = useContext(BlocksContext);
  useEffect(() => console.log(blocks), [blocks]);

  return (
    <div>
      <p>Home &#62; Blocks</p>
      <h2>Blocks</h2>
    </div>
  );
};
