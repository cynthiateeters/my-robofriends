import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* 
Error boundaries are React components that 
catch JavaScript errors anywhere in their 
child component tree, log those errors, and 
display a fallback UI instead of the component 
tree that crashed. Error boundaries catch errors 
during rendering, in lifecycle methods, and 
in constructors of the whole tree below them.

Only class components can be error boundaries. 
In practice, most of the time you’ll want to 
declare an error boundary component once and 
use it throughout your application.
https://reactjs.org/docs/error-boundaries.html
*/
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Ooops! That is not good.</h1>;
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ErrorBoundary;
