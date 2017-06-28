import React, { Component } from 'react';
import Accordion from '../../components/Accordion';
import { connect } from 'react-redux';
import { initMenu } from '../actions';
import '../../styles/tu.css';
class Nav extends Component {
    componentDidMount() {
        this.props.getInitialMenuData();
    }
    render() {
        console.clear();
        const { data } = this.props;
        return (
            <Accordion activeIndex={1} data= {data} fixed width={200}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.menuData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getInitialMenuData: () => {
            dispatch(initMenu())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);