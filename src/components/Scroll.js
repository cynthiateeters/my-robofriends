// This is a blank component meant to show
// how one is written
import React from 'react';

const Scroll = (props) => {
 return (
  <div style={{ overflowY: 'scroll', border: '1px solid black', height: '300px' }}>
   <h3>Scroll  ⤊⤋ This </h3>
   {props.children}
  </div>
 )
}

export default Scroll;