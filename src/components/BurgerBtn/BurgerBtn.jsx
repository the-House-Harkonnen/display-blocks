/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Nav from '../Nav';
import styles from './BurgerBtn.module.scss';

const BurgerBtn = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className={styles.btn} open={open} onClick={()=>setOpen(!open)}>
        <div className={open === true ? styles.btn__line : styles.btn__top} />
        <div className={open === true ? styles.btn__line : styles.btn__middle} />
        <div className={open === true ? styles.btn__line : styles.btn__bottom} />
      </div>
      <Nav open={open} />
    </>
  );
}

export default BurgerBtn;

// style={'transform' ?  'rotate(45deg)' : 'rotate(0)'} 
// onClick={() => 'transform' ? 'translateX(100%)' : 'translateX(0)'}
// onClick={() => 'transform' ? 'rotate(-45deg)' : 'rotate(0)'}