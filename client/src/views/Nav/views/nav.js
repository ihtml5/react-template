import React from 'react';
import Accordion from '../../../components/Accordion';
import { connect } from 'react-redux';
import '../../../styles/tu.css';

const Nav = ({data}) => {
    return (
        <Accordion activeIndex={0} data= {data} fixed width={200}/>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.todoApp.menuData
    }
}
export default connect(mapStateToProps)(Nav);