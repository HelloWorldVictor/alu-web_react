import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';

const styles = StyleSheet.create({
  footerText: {
    margin: 0,
  },
});

function Footer() {
  return (
    <p className={css(styles.footerText)}>
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </p>
  );
}

export default Footer;
