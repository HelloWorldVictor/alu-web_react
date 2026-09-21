import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('CourseList', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  describe('with an empty list of courses', () => {
    let wrapper;

    beforeEach(() => {
      // listCourses is deliberately not passed, so it falls back to []
      wrapper = shallow(<CourseList />);
    });

    it('renders a row showing "No course available yet"', () => {
      const rows = wrapper.find(CourseListRow);
      expect(rows.last().prop('textFirstCell')).toBe(
        'No course available yet'
      );
    });
  });

  describe('with a list of courses', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders the 5 different rows', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });

    it('renders a row for each course with its name and credit', () => {
      const rows = wrapper.find(CourseListRow);
      listCourses.forEach((course, index) => {
        const row = rows.at(index + 2);
        expect(row.prop('textFirstCell')).toBe(course.name);
        expect(row.prop('textSecondCell')).toBe(course.credit);
      });
    });
  });
});
