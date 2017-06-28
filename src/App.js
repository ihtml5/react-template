import React, { Component } from 'react';
import './App.css';
import { actions, view as Accordion } from './Nav';
import { connect } from 'react-redux';
import './styles/tu.css';
class App extends Component {
  componentDidMount() {
    this.props.resetMenuData([{
      title: 'App',
      list: [{
        text: 'home',
        href: '/',
        isRouter: true
      }, {
        text: 'todos',
        href: '/todos',
        isRouter: true
      }]
    }])
  }
  render() {
    return (
      <div className="App">
        <Accordion/>
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetMenuData: (data) => {
      dispatch(actions.initMenu(data));
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
