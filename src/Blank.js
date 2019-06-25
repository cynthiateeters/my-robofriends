// This is a blank component meant to show
// how one is written
import React from 'react';

const Blank = (props) => {
 console.log({props});
 return (
  props.children
 );
}

export default Blank;