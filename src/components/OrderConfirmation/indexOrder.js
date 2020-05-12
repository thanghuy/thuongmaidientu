import React, { Component } from 'react';
import img from '../../images/shopping_cart.jpg';
import '../../assets/payment.css';
import FormAddress from './FormAddress';
class indexPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeform : false,
            activeform1 : false,
            activeform2 : false
        }
    }
    activeForm1= () =>{
        this.setState({
            activeform : true,
            activeform1 : true,
            activeform2 : false
        })
    }
    activeForm2 = () =>{
        this.setState({
            activeform : true,
            activeform1 : false,
            activeform2 : true
        })
    }
    closeFrom = ()=>{
        this.setState({
            activeform : false 
        })
    }
    render() {
        let element =  this.state.activeform === true ? "block" : null;
        let showForm = "";
        if(this.state.activeform1){
            showForm = (
                <FormAddress/>
            )
        }
        return (
            <div className="cart_section">
            <div className="container">
                <div className="row main-payment">
                <div className="col-lg-9">
                    <div className="address-user">
                        <div className="card-body">
                            <h4 className="card-title"><i className='fas fa-map-marker-alt'></i>&ensp;Địa chỉ nhận hàng</h4>
                        </div>
                        <div className="address-row">
                            <div className="check-user-detail">
                                <p className="card-text">Nguyễn Huy Thắng ( 0968798351 )</p>
                            </div>
                            <div className="check-address">
                                <p className="card-text">144/9 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh</p>
                            </div>
                            <div className="check-update-address" onClick={this.activeForm1}>Sửa</div>
                        </div>
                    </div>
                    <div className="cart_container-pmt">
                        <div className="cart_items">
                            <ul className="cart_list">
                            <li className="cart_item clearfix">
                                <div className="cart_item_image">
                                    <img src={img} alt="cart" />
                                </div>
                                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                    <div className="cart_item_namec col-6">
                                        <div className="cart_item_text">MacBook Air 13</div>
                                    </div>
                                <div className="pay_item_quantity col-3">
                                    <div className="pay_item_text">Số lượng : 1</div>
                                </div>
                                <div className="pay_item_price col-3">
                                    <div className="pay_price_text">2.000.000.000 Đ</div>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="container-right-payment">
                        <h4>Thông tin đơn hàng</h4>
                        <hr />
                        <p>
                        Tổng tiền:
                            <span className="price-cart-total">11.000.000đ</span>
                        </p>
                        <button className="btn-cart" type="button">Đặt hàng</button>
                    </div>
                    </div>
                </div>
            </div>
                <div className="modal" style={{display : element}}>
                    <div className="modal-content-pm animate">
                        <div className="imgcontainer">
                            <span className="close" title="Close Modal" onClick={this.closeFrom}>&times;</span>
                        </div>  
                        {showForm}
                    </div>
                </div>
            </div>
        );
    }
}

export default indexPayment;