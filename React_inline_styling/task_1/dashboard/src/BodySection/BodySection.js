import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySection: {
    padding: '0 24px',
  },

  title: {
    color: '#e0354b',
  },
});

function BodySection({ title, children }) {
  return (
    <div className={css(styles.bodySection)}>
      <h2 className={css(styles.title)}>{title}</h2>
      {children}
    </div>
  );
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

BodySection.defaultProps = {
  title: '',
  children: null,
};

export default BodySection;
