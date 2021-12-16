/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  HomeIcon,
  BlocksIcon,
  BakersIcon,
  ChartsIcon,
  EcosystemIcon,
} from '../Icons/Icons';
import { DropDown } from '../DropDown/DropDown';
import { useThemeContext } from '../../contexts/themeContext';
import styles from './NavLink.module.scss';
import { useApiContext } from '../../contexts/apiContexts';
import { useBlocksContext } from '../../contexts/blocksContext';

const NavLink = () => {
  const { network, networkList, handleNetwork } = useApiContext();
  const networkOptions = networkList.map((el) => el.value);

  const history = useHistory();
  const { isError } = useBlocksContext();

  const linkHandler = (val) => {
    if (isError) {
      handleNetwork(networkList[0].value);
    } else {
      history.push(val);
    }
  };

  const [{ isDark }] = useThemeContext();
  const hoverRow =
    isDark === false ? `${styles.links__light}` : `${styles.links__dark}`;
  const listBg =
    isDark === false ? `${styles.bg__light}` : `${styles.bg__dark}`;
  const classes = `${styles.links} ${listBg}`;
  const links = [
    {
      name: 'Home',
      icon: <HomeIcon />,
      path: '/',
    },
    {
      name: 'Blocks',
      icon: <BlocksIcon />,
      path: '/home/blocks',
    },
    {
      name: (
        <DropDown
          name={network}
          options={networkOptions}
          callBack={handleNetwork}
        />
      ),
      icon: <BakersIcon />,
    },
    {
      name: 'Charts',
      icon: <ChartsIcon />,
      path: '/',
    },
    {
      name: 'Ecosystem',
      icon: <EcosystemIcon />,
      path: '/',
    },
  ];
  return (
    <ul className={classes}>
      {links.map((link) => (
        <li key={link.name} className={hoverRow}>
          <div className={styles.links__icon}>{link.icon}</div>
          <button
            type='button'
            className={styles.links__link}
            onClick={() => linkHandler(link.path)}
          >
            {link.name}
          </button>
          <span className={styles.links__arrow} />
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
