import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
} from './constants';

export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

// uses redux-thunk to take function and return object
/* 
With a plain basic Redux store, you can only do simple 
synchronous updates by dispatching an action. Middleware 
extend the store's abilities, and let you write async logic 
that interacts with the store.

Thunks are the recommended middleware for basic 
Redux side effects logic, including complex 
synchronous logic that needs access to the store, 
and simple async logic like AJAX requests.
https://github.com/reduxjs/redux-thunk
*/
export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>
      dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: users,
      })
    )
    .catch(error =>
      dispatch({
        type: REQUEST_ROBOTS_FAIL,
        payload: error,
      })
    );
};
