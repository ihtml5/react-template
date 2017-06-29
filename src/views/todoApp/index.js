import React, { Component } from 'react';
import '../../styles/App.css';
import { view as Todo } from './todos';
import { view as Filter } from './filter';
import { connect } from 'react-redux';
import { actions, view as Loading } from './loading';
import { actions as todoActions } from './todos';
class TodoApp extends Component {
  componentDidMount() {
      const { getLocalData } = this.props;
      getLocalData(JSON.parse(window.localStorage.getItem('todos')));
  }
  render() {
    const { loadingStyle } = this.props;
    return (
      <div className="App">
        <Loading loadingStyle={loadingStyle}/>
        <Todo/>
        <Filter/>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    loadingStyle: {
      display: state.todoApp.loading
    }
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getLocalData: (todos) => {
            dispatch(todos.length === 0 ? actions.getInitLoad() : todoActions.initTodos(todos));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
