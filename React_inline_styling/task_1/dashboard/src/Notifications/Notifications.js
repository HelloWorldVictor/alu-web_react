import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const styles = StyleSheet.create({
  notifications: {
    position: 'absolute',
    top: '36px',
    right: 0,
    zIndex: 10,
    border: '3px dashed #e0354b',
    padding: '12px 20px',
    backgroundColor: '#ffffff',
  },

  list: {
    margin: 0,
    paddingLeft: '20px',
  },

  menuItem: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '8px 12px',
    backgroundColor: '#fff8f8',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{
                position: 'absolute',
                right: '20px',
                top: '20px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Close"
              onClick={() => {
                console.log('Close button has been clicked');
              }}
            >
              <img src={closeIcon} alt="Close" width="15" height="15" />
            </button>
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.list)}>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
