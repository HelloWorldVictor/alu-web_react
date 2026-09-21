import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  describe('when isHeader is true', () => {
    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      const wrapper = shallow(
        <CourseListRow isHeader textFirstCell="Available courses" />
      );
      expect(wrapper.find('th')).toHaveLength(1);
      expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    });

    it('renders two cells when textSecondCell is present', () => {
      const wrapper = shallow(
        <CourseListRow
          isHeader
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      );
      expect(wrapper.find('th')).toHaveLength(2);
      expect(wrapper.find('tr').prop('style')).toEqual({
        backgroundColor: '#deb5b545',
      });
    });
  });

  describe('when isHeader is false', () => {
    it('renders two td elements within a tr element', () => {
      const wrapper = shallow(
        <CourseListRow
          isHeader={false}
          textFirstCell="ES6"
          textSecondCell="60"
        />
      );
      expect(wrapper.find('tr')).toHaveLength(1);
      expect(wrapper.find('tr').find('td')).toHaveLength(2);
      expect(wrapper.find('tr').prop('style')).toEqual({
        backgroundColor: '#f5f5f5ab',
      });
    });
  });
});
