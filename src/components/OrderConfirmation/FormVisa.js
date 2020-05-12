import React, { Component } from 'react';

class FormVisa extends Component {
    render() {
        return (
            <form action="/" method="post">
                <div className="form-group col-md-12">
                    <div className="row">
                        <div className="-formtt01 col-md-5">
                            Thanh toán qua thẻ
                        </div>
                        <label className="fname col-md-3">Chấp nhận thẻ</label>
                        <div className="icon-form01 col-md-4">
                            <i className="fab fa-cc-visa" style={{color:"navy"}}></i>
                            <i className="fab fa-cc-amex" style={{color:"blue"}}></i>
                            <i className="fab fa-cc-mastercard" style={{color:"red"}}></i>
                            <i className="fab fa-cc-discover" style={{color:"orange"}}></i>
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputAddress">Họ Và Tên</label>
                    <input type="text" className="form-control -fpm01" id="inputFullName" placeholder="Nhập họ tên" />
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputAddress2">Số thẻ</label>
                    <input type="text" className="form-control -fpm01" id="inputPhone" placeholder="Nhập số thẻ" />
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputCity">Ngày cấp</label>
                    <input type="text" className="form-control -fpm01" placeholder="Nhập ngày cấp thẻ" id="inputDateform" />
                </div>
                <div className="form-row col-md-12">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Ngày hết hạn</label>
                    <input type="text" className="form-control -fpm01" id="inputDateto" placeholder="Nhập ngày hết hạn" />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">CVV</label>
                    <input type="text" className="form-control -fpm01" id="inputPassword4" placeholder="CVV" />
                    </div>
                </div>
                <div className="form-group col-md-12">
                    <button className="login" type="submit">Xác nhận</button>
                </div>
            </form>
        );
    }
}

export default FormVisa;