import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBar from '../components/Header/TopBar';
// import * as action from '../action/SignUp';
class Header extends Component {
    render() {
        var { status,dataUser} = this.props;
        return (
            <TopBar status={status} dataUser={dataUser}/>
        );
    }
}
const mapStateToProps = state => {
    return {
        status : state.status,
        dataUser : state.dataUser
    }
}
// const mapDispatchToProps = (dispatch,props)=>{
//     return {
//         SignUp : () => {
//             dispatch(action.status())
//         }
//     }
// }
export default connect(mapStateToProps,null)(Header);