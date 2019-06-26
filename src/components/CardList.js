import React from 'react';
import Card from './Card';

/*
The robots prop comes in as an array. 
Map that array to be a Card component.

KEYS: React keys are useful when working with 
dynamically created components or when 
lists are altered by the users. 
Setting the key value will keep
components uniquely identified after the change.

The map function will create elements from the data array.
Since the key value needs to be unique for every element, 
assign i as a key for each created element.

If elements are added or removed in the future 
or the order of the dynamically created elements changes, 
React will use the key values to keep track of each element.
https://www.tutorialspoint.com/reactjs/reactjs_keys.htm
*/
const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />);
        })
      }
    </div>
  );
}

export default CardList;