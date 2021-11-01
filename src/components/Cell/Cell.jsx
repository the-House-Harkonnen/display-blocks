/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import { useHistory } from 'react-router-dom';

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
