import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const SMALL_SCREEN = '@media (max-width: 900px)';

const styles = StyleSheet.create({
  // Below 900px each row spans the screen and is separated by a black rule.
  item: {
    [SMALL_SCREEN]: {
      width: '100%',
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px',
      listStyle: 'none',
    },
  },

  default: {
    color: 'blue',
  },

  urgent: {
    color: 'red',
  },
});

function NotificationItem({ id, type, html, value, markAsRead }) {
  const itemProps = {
    className: css(
      styles.item,
      type === 'urgent' ? styles.urgent : styles.default
    ),
    'data-notification-type': type,
    onClick: () => markAsRead(id),
  };

  return html ? (
    <li {...itemProps} dangerouslySetInnerHTML={html} />
  ) : (
    <li {...itemProps}>{value}</li>
  );
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  id: 0,
  type: 'default',
  html: null,
  value: '',
  markAsRead: () => {},
};

export default React.memo(NotificationItem);
