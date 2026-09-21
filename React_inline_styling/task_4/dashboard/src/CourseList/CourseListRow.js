import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },

  headerRow: {
    backgroundColor: '#deb5b545',
  },

  cell: {
    padding: '8px 12px',
    border: '1px solid #dddddd',
    textAlign: 'left',
  },

  headerCell: {
    fontWeight: 'bold',
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const cellStyle = css(styles.cell, styles.headerCell);

  return (
    <tr className={css(isHeader ? styles.headerRow : styles.defaultRow)}>
      {isHeader ? (
        <>
          {textSecondCell === null ? (
            <th className={cellStyle} colSpan="2">
              {textFirstCell}
            </th>
          ) : (
            <>
              <th className={cellStyle}>{textFirstCell}</th>
              <th className={cellStyle}>{textSecondCell}</th>
            </>
          )}
        </>
      ) : (
        <>
          <td className={css(styles.cell)}>{textFirstCell}</td>
          <td className={css(styles.cell)}>{textSecondCell}</td>
        </>
      )}
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
