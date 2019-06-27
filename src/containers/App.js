import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event =>
      dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};
class App extends Component {
  componentDidMount() {
    const { onRequestRobots } = this.props;
    onRequestRobots();
  }

  render() {
    const {
      searchField,
      onSearchChange,
      robots,
      isPending,
    } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1 className="tc f1 pv5 m1">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1 pv3 m1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

App.propTypes = {
  onRequestRobots: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  searchField: PropTypes.string.isRequired,
  isPending: PropTypes.bool.isRequired,
  robots: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// Subscribe App to Redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
