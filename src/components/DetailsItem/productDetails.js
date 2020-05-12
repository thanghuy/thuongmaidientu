import React, { Component } from 'react';

class productDetails extends Component {
    render() {
        return (
            <div className="product_detail">
                <div className="detail_title">Chi tiết sản phẩm</div>
                <div className="detail_page_main">
                    <div className="detail_page">
                        <div className="_label-detail">
                            <label>Danh mục</label>
                        </div>
                        <div className="_label-text">
                            <label>Huythang&ensp;<i className='fas fa-angle-right'>&ensp;</i></label>
                            <label>Huythang&ensp;<i className='fas fa-angle-right'>&ensp;</i></label>
                            <label>Huythang</label>
                        </div>
                    </div>
                    <div className="detail_page">
                        <div className="_label-detail">
                            <label>Thể loại</label>
                        </div>
                        <div className="_label-text">
                            <label>Huythang</label>
                        </div>
                    </div>
                    <div className="detail_page">
                        <div className="_label-detail">
                            <label>Nhà xuất bản</label>
                        </div>
                        <div className="_label-text">
                            <label>Huythang</label>
                        </div>
                    </div>
                </div>
                <div className="detail_describe">Mô tả sản phẩm</div>
                <div className="detail_content">
                
                </div>
            </div>
        );
    }
}

export default productDetails;