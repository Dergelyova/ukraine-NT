import React from 'react';
import PropTypes from 'prop-types';

export const ArrowRightRound = ({ color }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill={color || '#2E2E2E'} />
    <path
      d="M6.9266 3.49219L11.0679 7.3396C11.1171 7.3854 11.1518 7.43502 11.1722 7.48846C11.1928 7.54189 11.2031 7.59915 11.2031 7.66022C11.2031 7.72129 11.1928 7.77854 11.1722 7.83198C11.1518 7.88541 11.1171 7.93503 11.0679 7.98083L6.9266 11.8397C6.8119 11.9466 6.66853 12 6.49648 12C6.32444 12 6.17697 11.9427 6.05408 11.8282C5.9312 11.7137 5.86975 11.5801 5.86975 11.4275C5.86975 11.2748 5.9312 11.1412 6.05408 11.0267L9.66701 7.66022L6.05408 4.29374C5.93939 4.18686 5.88204 4.05526 5.88204 3.89892C5.88204 3.74228 5.94348 3.6067 6.06637 3.49219C6.18926 3.37769 6.33263 3.32043 6.49648 3.32043C6.66034 3.32043 6.80371 3.37769 6.9266 3.49219Z"
      fill="white"
    />
  </svg>
);

ArrowRightRound.propTypes = {
  color: PropTypes.string,
};
