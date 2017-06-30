import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actions, view as Menu } from './common/Nav';
import menuData from './config/menu';
import './styles/App.css';
import './styles/tu.css';
class App extends PureComponent {
  componentDidMount() {
    this.props.resetMenuData(menuData || [])
  }
  render() {
    return (
      <div className="App">
        <Menu activeIndex={1} onlyOneOpen/>
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
