import React, { Component } from 'react';
import Alert from './message';
import * as URL from '../../constant/config';
import FormatNumber from '../../utils/FormatNumber';
import { connect } from 'react-redux';
import * as action from '../../action/addCart';
class InforProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : "",
            img : "",
            price : "",
            slug : "",
            listImg : [],
            quantity : 1,
            AlertAdd : false 
        }
    }
    handelChange = (event) =>{
        var {OneProduct} = this.props;
        var quantity = event.target.value;
        if(quantity < OneProduct.amount && quantity >= 1){
            this.setState({
                quantity : quantity
            })
        }
        else if(quantity > OneProduct.amount){
            this.setState({
                quantity : OneProduct.amount
            })
        }
        else{
            this.setState({
                quantity : 1
            })
        }
    }
    addToCart =(id) =>{
        var {quantity} = this.state;
        var {OneProduct,AddCartFinish} = this.props;
        var product = 
            {
                id : id,
                img : OneProduct.imagePath,
                name : OneProduct.name,
                price : OneProduct.price,
                slug : OneProduct.slug,
                quantity : quantity
            }
        this.setState({AlertAdd : true})
        setTimeout(()=>{
            this.setState({AlertAdd : false})
        },2000)
        var trangthaichung = false;
        var getItem = JSON.parse(localStorage.getItem('cart')) || [];
        getItem.map((products,index) => {
            if(products.id === id){
                var soluong = parseInt(quantity) + parseInt(products.quantity);
                var productss = 
                {
                    id : products.id,
                    img : OneProduct.imagePath,
                    name : OneProduct.name,
                    price : OneProduct.price,
                    slug : OneProduct.slug,
                    quantity : soluong
                }
                getItem.splice(index,1,productss);
                return trangthaichung = true;
            }
            else if(product.id !== id){
                return trangthaichung = false;
            }
            return 0;
        })
        if(!trangthaichung){
            getItem.push(product);
            localStorage.setItem("cart",JSON.stringify(getItem));
            AddCartFinish()
        }
        else{
            localStorage.setItem('cart',JSON.stringify(getItem));
            AddCartFinish()
        }
    }
    setMinus = () =>{
        var {quantity} = this.state;
        if(quantity > 1){
            var minus = parseInt(quantity) - 1;
            this.setState({quantity : minus})
        }
    }
    setPlus = () =>{
        var {OneProduct} = this.props;
        var {quantity} = this.state;
        if(quantity < OneProduct.amount){
            var minus = parseInt(quantity) + 1;
            this.setState({quantity : minus})
        }
    }
    
    showListImg =()=>{
        var listImg = this.props.OneProduct.imagePaths;
        var result = "";
        if(listImg !== undefined){
            result = listImg.map((img,index)=>{
                 return (
                    <li className="active" key={index}>
                        <div data-target="#pic-1" data-toggle="tab" className="listimg">
                            <img src={URL.urlImg + img} alt="main"/>
                        </div>
                    </li>
                )
            })
        }
        return result;
    }
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
        var {quantity,AlertAdd} = this.state;
        var {OneProduct} = this.props;
        var showMessge = AlertAdd ? <Alert/> : "";
        var imgMain = URL.urlImg + OneProduct.imagePath;
        return (
            <div className="card">
                {showMessge}
                <div className="container-fliud">
                <div className="wrapper row">
                    <div className="preview col-md-6">
                    <div className="preview-pic tab-content">
                        <div className="tab-pane active" id="pic-1">
                            <img src={imgMain} alt="main"/>
                        </div>
                    </div>
                    <ul className="preview-thumbnail nav nav-tabs">
                        {this.showListImg()}
                    </ul>
                    </div>
                    <div className="details col-md-6">
                    <h3 className="product-title">{OneProduct.name}</h3>
                    <div className="rating">
                        <div className="stars">
                            {this.showRating()}
                        </div>
                        <span className="review-no">{OneProduct.rateCount} đánh giá</span>
                    </div>
                    <h4 className="price">
                        Giá : <span>{FormatNumber(OneProduct.price)}</span>
                    </h4>
                    <p className="vote">
                        <strong>Giảm 50%</strong>
                        <strong>300.000Đ</strong>
                    </p>
                    <b className="product-description">
                        Nhà xuất bản :&ensp;{OneProduct.publisher}
                    </b>
                    <h5 className="sizes">
                        Tác giả :
                        <span className="size" data-toggle="tooltip" title="small">{OneProduct.author}</span>
                    </h5>
                    <div className="colors">
                        Số lượng:
                        <div className="quantity">
                            <button type="button" className="minus icon-dt1" onClick={this.setMinus}>-</button>
                                <input type="text" className="number-pc01" onChange={this.handelChange} value={quantity}/>
                            <button type="button" className="plus icon-dt1" onClick={this.setPlus}>+</button>
                            <span className="quantity_product">Còn {OneProduct.amount} sản phẩm</span>
                        </div>
                    </div>
                    <div className="action">
                        <button className="add-to-cart" type="button" onClick={() => this.addToCart(OneProduct.bookId)}>
                        <i className="fas fa-cart-plus">&ensp;</i>
                        Thêm vào giỏ hàng
                        </button>
                        <button className="like" type="button">
                        Mua ngay
                        </button>
                        {/* <button className="like" type="button">
                            <span className="fa fa-heart" />
                        </button> */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        dataCart : state.dataCart
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        AddCartFinish : () => {
            dispatch(action.AddCart())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InforProduct);