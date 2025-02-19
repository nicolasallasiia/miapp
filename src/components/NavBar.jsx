import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.navBar}>
      <h1 style={styles.logo}>Mi Tienda</h1>
      <CartWidget />
    </nav>
  );
};

const styles = {
  navBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    margin: '0',
  },
};

export default NavBar;