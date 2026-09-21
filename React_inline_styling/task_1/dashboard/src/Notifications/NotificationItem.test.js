import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct html when passing type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    const li = wrapper.find('li');

    expect(li).toHaveLength(1);
    expect(li.prop('data-notification-type')).toBe('default');
    expect(li.text()).toBe('test');
  });

  it('renders the correct html when passing an html prop', () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.html()).toContain('<u>test</u>');
  });
  it('calls markAsRead with the right id when clicked', () => {
    const markAsRead = jest.fn();
    const wrapper = shallow(
      <NotificationItem
        id={5}
        type="default"
        value="test"
        markAsRead={markAsRead}
      />
    );

    wrapper.find('li').simulate('click');

    expect(markAsRead).toHaveBeenCalledWith(5);
  });
});
