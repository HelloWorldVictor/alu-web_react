import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 24px',
    borderBottom: '3px solid #e0354b',
  },

  logo: {
    width: '200px',
    height: '200px',
  },

  title: {
    margin: '0 0 0 16px',
    color: '#e0354b',
    fontSize: '2.4rem',
  },
});

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={holbertonLogo} className={css(styles.logo)} alt="Holberton logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}

export default Header;
