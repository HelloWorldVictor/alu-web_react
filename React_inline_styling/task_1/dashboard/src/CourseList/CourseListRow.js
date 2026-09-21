import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Declared once, outside the component, so a new object is not created on
// every render.
const headerRowStyle = { backgroundColor: '#deb5b545' };
const defaultRowStyle = { backgroundColor: '#f5f5f5ab' };

const styles = StyleSheet.create({
  cell: {
    padding: '8px 12px',
    border: '1px solid #dddddd',
    textAlign: 'left',
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader) {
    return (
      <tr style={headerRowStyle}>
        {textSecondCell === null ? (
          <th className={css(styles.cell)} colSpan="2">
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.cell)}>{textFirstCell}</th>
            <th className={css(styles.cell)}>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  }

  return (
    <tr style={defaultRowStyle}>
      <td className={css(styles.cell)}>{textFirstCell}</td>
      <td className={css(styles.cell)}>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
