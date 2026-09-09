import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  return (
    <div className="Notifications">
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
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
