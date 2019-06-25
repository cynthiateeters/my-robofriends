import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
//import { robots } from './robots';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
   constructor() {
      super();
      this.state = {
         robots: [],
         searchField: ''
      };
   }

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => this.setState({ robots: users })
         );
   }

   onSearchChange = (event) => {
      this.setState({ searchField: event.target.value });
   }

   render() {
      const { robots, searchField } = this.state;
      const onSearchChange = this.onSearchChange;

      const filteredRobots = robots.filter(robot => {
         return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });
      return !robots.length ?
         <h1 className='tc f1 pv5 m1'>Loading</h1>
         :
         (
            <div className='tc'>
               <h1 className='f1 pv3 m1'>RoboFriends</h1>
               <SearchBox searchChange={onSearchChange} />
               <Scroll>
                  <CardList robots={filteredRobots} />
               </Scroll>
            </div>
         );
   }
}


export default App;