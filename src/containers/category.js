import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainNav from '../components/Web/Header/Main_nav';
class productContainers extends Component {
    render() {
        var { category } = this.props;
        return (
            <MainNav category={category}/>
        );
    }
}
const mapStateToProps = state => {
    return {
        category : state.category
    }
}
export default connect(mapStateToProps,null)(productContainers);