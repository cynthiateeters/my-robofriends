import React from 'react';
import PropTypes from 'prop-types';

/*
React attaches listeners 
for Component.onChange to the 
DOM element.oninput event. 

In HTML, form elements such as <input>, 
<textarea>, and <select> typically maintain 
their own state and update it based on user input. 
In React, mutable state is typically kept in the 
state property of components, and only updated 
with setState().

We can combine the two by making the React state 
be the “single source of truth”. Then the React 
component that renders a form also controls what 
happens in that form on subsequent user input. 
An input form element whose value is controlled 
by React in this way is called a 
“controlled component”.
https://reactjs.org/docs/forms.html

*/
const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue text-input"
        type="search"
        placeholder="search robot name"
        onChange={searchChange}
      />
    </div>
  );
};

SearchBox.propTypes = {
  searchChange: PropTypes.func.isRequired,
};

export default SearchBox;
