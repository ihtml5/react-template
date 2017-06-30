import React, { Component } from 'react';
import './styles/App.css';
import { actions, view as Accordion } from './views/Nav';
import menuData from './config/menu';
import { connect } from 'react-redux';
import './styles/tu.css';
class App extends Component {
  componentDidMount() {
    this.props.resetMenuData(menuData || [])
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
