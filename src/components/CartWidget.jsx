import React from 'react';

const CartWidget = () => {
  return (
    <div style={styles.cartWidget}>
      <span role="img" aria-label="cart">🛒</span>
      <span style={styles.cartCount}>0</span> {/* Puedes cambiar el número dinámicamente */}
    </div>
  );
};

const styles = {
  cartWidget: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  cartCount: {
    marginLeft: '5px',
    fontSize: '14px',
  },
};

export default CartWidget;