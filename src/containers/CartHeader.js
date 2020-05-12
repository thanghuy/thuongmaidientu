import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartHeader from '../components/Header/CartHeader';
class AddCart extends Component {
    render() {
        var {dataCart} = this.props;
        return (
                <CartHeader dataCart={dataCart} />
        );
    }
}
const mapStateToProps = state => {
    return {
        dataCart : state.dataCart
    }
}
export default connect(mapStateToProps)(AddCart);