import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ id, type, html, value, markAsRead }) {
  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      />
    );
  }

  return (
    <li data-notification-type={type} onClick={() => markAsRead(id)}>
      {value}
    </li>
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
