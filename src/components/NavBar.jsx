import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.navBar}>
      <h1 style={styles.logo}>Mi Tienda</h1>
      <ul style={styles.navLinks}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    margin: '0',
    fontSize: '24px',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  navLinksLi: {
    marginLeft: '20px',
  },
};

export default NavBar;