import React, { Component } from 'react'
import img from '../../images/avatar.png';
export default class productReviews extends Component {
    showRating =()=>{
        var {OneProduct} = this.props;
        var result = [];
        if(OneProduct.rating > 0){
            for(let i = 0; i < parseInt(OneProduct.rating) ;i++){
                result.push(<span className="fa fa-star checked" key={i} />)
            }
            for(let j = 0 ;j < 5 - parseInt(OneProduct.rating) ;j++){
                result.push(<span className="fa fa-star" key={j+5} />)
            }
        }
        return result;
    }
    render() {
        var {OneProduct} = this.props;
        return (
            <div className="product_review">
                <div className="product_review_title">Đánh giá sản phẩm</div>
                <div className="review_rating">
                    <span className="-rdm01">Đánh giá</span>
                    {this.showRating()}
                    <p>{OneProduct.rating} trung bình trên {OneProduct.rateCount} đánh giá</p>
                    <div className="row-rd1">
                        <div className="side">
                        <div>{OneProduct.rate5} sao</div>
                        </div>
                        <div className="middle">
                        <div className="bar-container">
                            <div className="bar-5" />
                        </div>
                        </div>
                        <div className="side right">
                            <div>150</div>
                        </div>
                        <div className="side">
                        <div>{OneProduct.rate4} sao</div>
                        </div>
                        <div className="middle">
                        <div className="bar-container">
                            <div className="bar-4" />
                        </div>
                        </div>
                        <div className="side right">
                        <div>63</div>
                        </div>
                        <div className="side">
                        <div>{OneProduct.rate3} sao</div>
                        </div>
                        <div className="middle">
                        <div className="bar-container">
                            <div className="bar-3" />
                        </div>
                        </div>
                        <div className="side right">
                        <div>15</div>
                        </div>
                        <div className="side">
                        <div>{OneProduct.rate2} sao</div>
                        </div>
                        <div className="middle">
                        <div className="bar-container">
                            <div className="bar-2" />
                        </div>
                        </div>
                        <div className="side right">
                        <div>6</div>
                        </div>
                        <div className="side">
                        <div>{OneProduct.rate1} sao</div>
                        </div>
                        <div className="middle">
                        <div className="bar-container">
                            <div className="bar-1" />
                        </div>
                        </div>
                        <div className="side right">
                        <div>20</div>
                        </div>
                    </div>
                </div>
                <div className="product_review_title">Nhận xét về sản phẩm</div>
                <div className="chat-mesage">
                    <div className="container-chat">
                        <div className="avatar-user">
                            <img
                            src={img}
                            alt="Avatar"
                            style={{ width: "100%" }}
                            />
                        </div>
                        <div className="comment-user">
                            <div className="user-name">
                                <label className="name-reply">Huy thắng</label>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <label className="time-comment">&ensp;2 giờ trước</label>
                            </div>
                            <div className="content-comment">
                                <p>Biết là vậy nhưng nó vẫn là đỉnh cao thiết kế. Mình thấy tới tận bây giờ sau gần 7năm nó vẫn đẹp chứ không lỗi thời
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-reply">
                        <div className="avatar-user">
                            <img
                            src={img}
                            alt="Avatar"
                            style={{ width: "100%" }}
                            />
                        </div>
                        <div className="comment-reply">
                            <div className="user-name">
                                <label className="name-reply">Huy thắng</label>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <label className="time-comment">&ensp;2 giờ trước</label>
                            </div>
                            <div className="content-comment">
                                <p>Biết là vậy nhưng nó vẫn là đỉnh cao thiết kế. Mình thấy tới tận bây giờ sau gần 7năm nó vẫn đẹp chứ không lỗi thời
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
