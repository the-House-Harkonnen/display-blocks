/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
// import { Burger } from '../Burger';
import LoginBtn from '../LoginBtn';
import Logo from '../Logo';
import Nav from '../Nav';
import styles from './Header.module.scss';
import burgerIcon from "../../imgs/Vector.svg";
import userIcon from "../../imgs/Group.svg";

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  console.log(showNav);
  const classNav = showNav? `${styles.nav} ${styles.show}`: styles.nav;
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.burger}>
      <button type='button'>
      <img src={userIcon} alt="burger" />
      </button>
      <button type='button' onClick={()=> setShowNav(!showNav)}>
      <img src={burgerIcon} alt="burger" />
      </button>
      </div>
      <div className={classNav}> 
      <Nav />
      <LoginBtn />
      </div>   
      
    </div>
  );
}

export default Header;
