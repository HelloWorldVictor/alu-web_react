import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<u>test</u>' } },
];

describe('Notifications', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  describe('when displayDrawer is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={false} />);
    });

    it('displays the menu item', () => {
      expect(wrapper.find('div.menuItem')).toHaveLength(1);
    });

    it('does not display div.Notifications', () => {
      expect(wrapper.find('div.Notifications')).toHaveLength(0);
    });
  });

  describe('when displayDrawer is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer />);
    });

    it('displays the menu item', () => {
      expect(wrapper.find('div.menuItem')).toHaveLength(1);
    });

    it('displays div.Notifications', () => {
      expect(wrapper.find('div.Notifications')).toHaveLength(1);
    });
  });

  describe('with a list of notifications', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
    });

    it('renders a NotificationItem for each element of the list', () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(
        listNotifications.length
      );
    });

    it('renders the text "Here is the list of notifications"', () => {
      expect(wrapper.find('p').text()).toBe(
        'Here is the list of notifications'
      );
    });

    it('renders the right html for the first NotificationItem', () => {
      expect(wrapper.find(NotificationItem).first().html()).toEqual(
        '<li data-notification-type="default">New course available</li>'
      );
    });
  });

  it('logs the right message when markAsRead is called', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );

    wrapper.instance().markAsRead(1);

    expect(logSpy).toHaveBeenCalledWith(
      'Notification 1 has been marked as read'
    );

    logSpy.mockRestore();
  });

  describe('with an empty list of notifications', () => {
    let wrapper;

    beforeEach(() => {
      // listNotifications is deliberately not passed, so it falls back to []
      wrapper = shallow(<Notifications displayDrawer />);
    });

    it('displays "No new notification for now" instead of the list', () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(0);
      expect(wrapper.text()).not.toContain('Here is the list of notifications');
      expect(wrapper.find('p').text()).toBe('No new notification for now');
    });
  });
  describe('when the props are updated', () => {
    it('does not rerender when the new list is the same length', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      const renderSpy = jest.spyOn(Notifications.prototype, 'render');

      wrapper.setProps({ listNotifications });

      expect(renderSpy).not.toHaveBeenCalled();

      renderSpy.mockRestore();
    });

    it('rerenders when the new list is longer', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      const renderSpy = jest.spyOn(Notifications.prototype, 'render');

      wrapper.setProps({
        listNotifications: [
          ...listNotifications,
          { id: 4, type: 'default', value: 'New notification' },
        ],
      });

      expect(renderSpy).toHaveBeenCalled();

      renderSpy.mockRestore();
    });
  });
});
