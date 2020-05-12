import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/product/Content';

class productContainers extends Component {
    render() {
        var { product } = this.props;
        return (
            <Products product={product}/>
        );
    }
}
const mapStateToProps = state => {
    return {
        product : state.product
    }
}
export default connect(mapStateToProps,null)(productContainers);