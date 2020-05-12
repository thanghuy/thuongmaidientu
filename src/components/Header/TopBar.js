import React, { Component } from 'react';
import {Link} from "react-router-dom"; 
// import mail from '../../../images/mail.png';
import sigup from '../../images/user.png';
import Login from './Login';
class TopBar extends Component { 
    constructor(props){
        super(props);
        this.state = {
            showForm : true,
            activeBorder2: false,
            active : false,
            status : false,
            dataUser : ""
        }
    }
    showFrom = () =>{
        this.setState({
            active : true
        })
    }
    closeFrom = ()=>{
        this.setState({
            active : false 
        })
    }
    activeForm2 = ()=>{
        this.setState({
            active : true,
            activeBorder2 : true
        })
    }
    componentDidMount(){
        var getUser = JSON.parse(localStorage.getItem('userName'));
        if(getUser !== null){
            this.setState({
                dataUser : getUser,
                status : true
            })
        }
    }
    getStatus =(status) =>{
        this.setState({
            dataUser : JSON.parse(localStorage.getItem('userName')),
            status : status,
            active : false, 
        })
    }
    logOut = () =>{
        localStorage.removeItem("userName");
        this.setState({
            status : false
        })
    }
    render(){
        var {active,activeBorder2,dataUser,status} = this.state;
        let element =  active ? "block" : null;
        let elementBorder2 = activeBorder2 ? "active-user" : null;
        let showForm = "";
        if(activeBorder2 === true){
            showForm = (
                <Login setStatus={this.getStatus}/>
            )
        }
        let showSpan = ""
        if(!status){
            showSpan = (
                <div className="top_bar_user">
                    <div className="user_icon"><img src={sigup} alt="user"></img></div>
                    <div className="link-dk"><Link to="/signup">Đăng ký</Link></div>
                    <div><span onClick={this.activeForm2}>Đăng nhập</span></div>
                </div>
            ) 
        }
        else{
            showSpan = (
                <div className="top_bar_user">
                    <div className="user_icon"><img src={sigup} alt="user"></img></div>
                    <div className="user-name-us01">
                        <span>{dataUser.fullname}</span>
                        <div className="dropdown-content-us01">
                            <Link to="/user/profile">Tài khoản</Link>
                            <Link to="/user/order">Đơn hàng</Link>
                            <span onClick={this.logOut}>Đăng xuất</span>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="top_bar">
                <div className="container">
                    <div className="row">
                    <div className="col d-flex flex-row">
                        <div className="top_bar_contact_item">
                            <Link to="/">Kênh người bán</Link>
                        </div>
                        <div className="top_bar_contact_item">
                            {/* <div className="top_bar_icon">
                                <img src={mail} alt="mail"></img>
                            </div> */}
                        <Link to="huythang0903@gmail.com">Liên hệ shop</Link></div>
                        <div className="top_bar_content ml-auto">
                            <div className="top_bar_menu">
                                <ul className="standard_dropdown top_bar_dropdown">
                                <li>
                                    <Link to="/">Thông báo<i className="fas fa-chevron-down"></i></Link>
                                </li>
                                <li>
                                    <Link to="/">Tiếng Việt<i className="fas fa-chevron-down"></i></Link>
                                    <ul>
                                    <li><Link to="/">Tiếng Anh</Link></li>
                                    </ul>
                                </li>
                                </ul>
                            </div>
                            {showSpan}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="modal" style={{display : element}}>
                    <div className="modal-content animate">
                        <div className="imgcontainer">
                            <span className="close" title="Close Modal" onClick={this.closeFrom}>&times;</span>
                        </div> 
                        <ul className="nav tablink">
                            <li className="nav-item">
                                <Link className={`nav-link`} to="/signup" onClick={this.closeFrom}>ĐĂNG KÝ</Link>
                            </li>
                            <li className="nav-item">
                                <span className={`nav-link ${elementBorder2}`} onClick={this.activeForm2}>ĐĂNG NHẬP</span>
                            </li>
                        </ul> 
                        {showForm}
                    </div>
                </div>		
            </div>
        );
    }
}

export default TopBar;
