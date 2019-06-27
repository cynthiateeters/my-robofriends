import React from 'react';
import PropTypes from 'prop-types';

const Scroll = props => {
  const { children } = props;
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid black',
        height: '300px',
      }}
    >
      <h3>Scroll ⤊⤋ This </h3>
      {children}
    </div>
  );
};

Scroll.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Scroll;
