import React, { Component } from 'react';
import '../App.css';
import { view as Todo } from './todos';
import { view as Filter } from './filter';
import { connect } from 'react-redux';
import { actions } from './todos';
class TodoApp extends Component {
  componentDidMount() {
      const { getLocalData } = this.props;
      getLocalData(JSON.parse(window.localStorage.getItem('todos')));
  }
  render() {
    return (
      <div className="App">
        <Todo/>
        <Filter/>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getLocalData: (todos) => {
          dispatch(actions.initTodos(todos || []));
        }
    }
}
export default connect(null, mapDispatchToProps)(TodoApp);
