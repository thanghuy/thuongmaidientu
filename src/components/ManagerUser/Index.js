import React, { Component } from 'react';
import '../../assets/manger-user.css';
import avatar from '../../images/avatar.png'
import {Route,Link} from 'react-router-dom'
const menus = [
    {
        name : 'Tài khoản của tôi',
        to : '/user/profile',
        icon : "fas fa-user",
        exact : true
    },
    {
        name : 'Đơn hàng',
        to : '/user/order',
        icon : "fas fa-clipboard-list",
        exact : false
    },
    {
      name : 'Ngân hàng',
      to : '/user/bank',
      icon : "fas fa-university",
      exact : false
    },
    {
      name : 'Địa chỉ',
      to : '/user/adress',
      icon : "fas fa-map-marker-alt",
      exact : false
    },
    {
      name : 'Đổi mật khẩu',
      to : '/user/change-pass-word',
      icon : "fas fa-sync",
      exact : false
    },
    {
        name : 'Thông báo',
        to : '/user/notifications',
        icon : "fas fa-bell",
        exact : false
    }
    
]
const MenuLink = ({lable,to,icon,activeOnlyWhenExact}) =>{
    return (
      <Route path={to} exact={activeOnlyWhenExact} children={({ match })=> {
      var active = match ? 'active-user-m' : '';
        return(
            <Link to={to} className={`list-group-item ${active}`}>
                <i className={icon}/><span>{lable}</span>
            </Link>
        )
      }}
      />
    )
  }
class Index extends Component {
    showMenu = (menus) =>{
        var result = "";
        if(menus.length > 0){
            result = menus.map((menu,index) =>{
                return (
                <MenuLink key={index} icon={menu.icon} lable={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                );
            });
        }
        return result;
    }
    render() {
        var {match} = this.props;
        console.log(match)
        return (
            <div className="container d-flex" id="wrapper">
                <div id="sidebar-wrapper">
                    <div className="sidebar-heading">
                        <img src={avatar} alt="Avatar" className="avatar"/>
                        <span className="nameuser">Nguyễn Huy Thắng</span>
                    </div>
                    <div className="list-group list-group-flush">
                        {this.showMenu(menus)}
                    </div>
                </div>
                <div id="page-content-wrapper">
                    <div className="container-fluid">

                    </div>
                </div>
            </div>
        );
    }
}

export default Index;