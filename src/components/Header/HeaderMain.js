import React, { Component } from 'react';
import {Link} from "react-router-dom"; 
import Search from './SearchHeader';
import Cart from '../../containers/CartHeader';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll : false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () =>{
      const top = window.scrollY < 100;
      if(top !== true){
        this.setState({scroll : true})
      }
      else{
        this.setState({scroll : false})
      }
    });
  }
render(){
  return (
        <div className={`header_main ${this.state.scroll ? 'sticky' :''}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-3 col-3 order-1">
                <div className="logo_container">
                  <div className="logo"><Link to="/">TahuTa</Link></div>
                </div>
                {/* <div className="cat_menu_container">
                  <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                      <div className="cat_burger"><span></span><span></span><span></span></div>
                      <div className="cat_menu_text">Danh mục</div>
                  </div>
                  <ul className="cat_menu"></ul>
                </div> */}
              </div>
              <Search/>
              <div className="col-lg-1 col-9 order-lg-3 order-2 text-lg-left text-right">
                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                  <Cart/>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
}

export default Main;
