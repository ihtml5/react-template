import React, { Component } from 'react';
import '../App.css';
import { view as Todo } from './todos';
import { view as Filter } from './filter';
import { connect } from 'react-redux';
import { actions, view as Loading } from './loading';
class TodoApp extends Component {
  componentDidMount() {
      const { getLocalData } = this.props;
      getLocalData();
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
      display: state.loading
    }
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getLocalData: () => {
          dispatch(actions.getInitLoad());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
