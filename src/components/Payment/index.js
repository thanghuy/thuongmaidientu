import React, { Component } from 'react';
import '../../assets/payment.css';
import Visa from './FormVisa';
import Momo from './FormMomo';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm1 : false,
            activeForm2 : false,
            activeBt : false
        }
    }
    paymentN = ()=>{
        this.setState({
            activeForm1 : false,
            activeForm2 : false
        })
    }
    activeForm1 =()=>{
        this.setState({
            activeForm1 : true,
            activeForm2 : false
        })
    }
    setMomo = () =>{
        this.setState({
            activeForm1 : false,
            activeForm2 : true
        })  
    }
    render() {
        var {activeForm1,activeForm2} = this.state;
        var showFrom = "";
        if(activeForm1 === true && activeForm2 === false){
            showFrom = (
                <Visa/>
            )
        }
        else{
            showFrom = (
                <Momo/>
            )
        }
        var activeBt = activeForm1 === true || activeForm2 === true ? "" : "active-mtpm";
        return (
            <div className="cart_section">
                <div className="container">
                    <div className="row main-payment">
                    <div className="col-lg-9">
                        <div className="cart_container-pmt">
                            <div className="method-payment">
                                <div className="row">
                                    <div className="title-mtpm col-3">
                                        <span>Phương thức thanh toán</span>
                                    </div>
                                    <div className="list-mtpm col-9">
                                        <span>
                                            <button type="button" className={`btn-mtpm ${activeBt}`} onClick={this.paymentN}>Thanh toán khi nhận hàng</button>
                                        </span>
                                        <span>
                                            <button type="button" className={`btn-mtpm ${activeForm1 ? "active-mtpm" : ""}`} onClick={this.activeForm1}>Thanh toán qua thẻ ATM</button>
                                        </span>
                                        <span><button type="button" className={`btn-mtpm ${activeForm2 ? "active-mtpm" : ""}`} onClick={this.setMomo}>Thanh toán qua MOMO</button></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {showFrom}
                    </div>
                    <div className="col-3">
                        <div className="container-right-payment">
                            <h4>Thông tin đơn hàng</h4>
                            <hr />
                            <p>
                            Tổng tiền:
                                <span className="price-cart-total">11.000.000đ</span>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;