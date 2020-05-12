import React, { Component } from 'react';
import {Link} from "react-router-dom"; 
import Categories from './CategoriesHeader';
import Responsive from './responsive';
class Main_nav extends Component {
    render(){
    return (
        <div>        
        <nav className="main_nav">
            <div className="container">
                <div className="row">
                <div className="col">
                    <div className="main_nav_content d-flex flex-row">
                    <Categories/>
                    <div className="main_nav_menu">
                        <ul className="standard_dropdown main_nav_dropdown">
                        <li><Link to="/">Sách giảm giá<i className="fas fa-chevron-down"></i></Link></li>
                        <li>
                            <Link to="/">Sách hot<i className="fas fa-chevron-down"></i></Link>
                        </li>
                        <li><Link to="/">Sách mới<i className="fas fa-chevron-down"></i></Link></li>
                        </ul>
                    </div>

                    {/* Menu Trigger */}
                    <div className="menu_trigger_container ml-auto">
                        <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                        <div className="menu_burger">
                            <div className="menu_trigger_text">menu</div>
                            <div className="cat_burger menu_burger_inner"><span></span><span></span><span></span></div>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
            </div>
            </nav>
            <Responsive/>
        </div>
        );
    }
}

export default Main_nav;
