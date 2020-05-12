import React, { Component } from 'react';
import cartimg from '../../images/cart.png';
import {Link} from "react-router-dom"; 
import cartimge from '../../images/giohangtrong.png'; 
import * as URL from '../../constant/config';
class cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart_empty : false,
            numberCart : 0,
            products : JSON.parse(localStorage.getItem('cart'))
        }
    }
    AddCart = () =>{
        var {dataCart} = this.props;
        var products = dataCart;
        var result = "";
        if(products !== null){
            result = products.map((product,index) =>{
                var img = URL.urlImg + product.img;
                return (
                    <div className="show-item-cart" key={index}>
                        <div className="item_cart">
                            <div className="item_cart_img">
                                <img src={img} alt="item1"/>
                            </div>
                            <div className="item_cart_name">
                                <span>{product.name}</span>
                            </div>
                            <div className="item_cart_price">
                                <span>{product.price}</span>
                                <button type="button" className="btn btn-danger">Xóa</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        else{
            result = (
                <div className="cart_empty">
                    <img src={cartimge}  alt="cart_empty"/>
                </div>
            )
        }
        return result
    }
    render() {
        var {dataCart} = this.props;
        var products = dataCart;
        let number = 0;
        if(products !== null){
            products.forEach(element => {
                number += element.quantity;
            })
        }
        return (
            <div className="cart">
                <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                    <div className="cart_content">
                        <Link to="/cart">
                            <div className="cart_icon">
                                <img src={cartimg} alt="cart"></img>
                                <div className="cart_count"><span>{number}</span></div>
                            </div>
                        </Link>
                        <div className="show-cart">
                            <div className="title_cart">
                                <h5>Danh sách sản phẩm</h5>
                            </div>
                            <div className="show-cart-m01">
                                {this.AddCart()}
                            </div>
                            <div className="to_cart">
                                <Link to="/cart">Đến giỏ hàng</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default cart;