<<<<<<< HEAD
/* eslint-disable no-console */
=======
>>>>>>> style(src): fixed styles according to design
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
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

const NavLink = () => {
  const { network, networkList, handleNetwork } = useApiContext();
  const networkOptions = networkList.map((el) => el.value);
  const [{ isDark }] = useThemeContext();
  const hoverRow =
    isDark === false ? `${styles.links__light}` : `${styles.links__dark}`;
  const listBg =
    isDark === false ? `${styles.bg__light}` : `${styles.bg__dark}`;
  const classes = `${styles.links} ${listBg}`;
  const links = [
    {
      id: 0,
      name: 'Home',
      icon: <HomeIcon />,
    },
    {
      id: 1,
      name: 'Blocks',
      icon: <BlocksIcon />,
    },
    {
      id: 2,
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
      id: 3,
      name: 'Charts',
      icon: <ChartsIcon />,
    },
    {
      id: 4,
      name: 'Ecosystem',
      icon: <EcosystemIcon />,
    },
  ];
  return (
    <ul className={classes}>
      {links.map((link) => (
        <li key={link.id} className={hoverRow}>
          <div className={styles.links__icon}>{link.icon}</div>
          <a className={styles.links__link} href='#'>
            {link.name}
          </a>
          <span className={styles.links__arrow} />
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
