import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('WithLogging', () => {
  it('logs "Component" on mount and unmount when wrapping pure html', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const WrappedHtml = WithLogging(() => <p />);
    const wrapper = mount(<WrappedHtml />);

    expect(logSpy).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();

    expect(logSpy).toHaveBeenCalledWith(
      'Component Component is going to unmount'
    );
    expect(logSpy).toHaveBeenCalledTimes(2);

    logSpy.mockRestore();
  });

  it('logs the component name on mount and unmount when wrapping Login', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const WrappedLogin = WithLogging(Login);
    const wrapper = mount(<WrappedLogin />);

    expect(logSpy).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();

    expect(logSpy).toHaveBeenCalledWith(
      'Component Login is going to unmount'
    );
    expect(logSpy).toHaveBeenCalledTimes(2);

    logSpy.mockRestore();
  });
});
