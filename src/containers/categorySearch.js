import React, { Component } from 'react';
import { connect } from 'react-redux';
import CateorySearch from '../components/Web/Header/HeaderMain';
class productContainers extends Component {
    render() {
        var { category } = this.props;
        return (
            <CateorySearch category={category}/>
        );
    }
}
const mapStateToProps = state => {
    return {
        category : state.category
    }
}
export default connect(mapStateToProps,null)(productContainers);