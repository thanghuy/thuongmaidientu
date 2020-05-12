import React, { Component } from 'react';
import '../../assets/cart_styles.css';
import '../../assets/cart_responsive.css';
import {Link} from 'react-router-dom';
import FormatNumber from '../../utils/FormatNumber';
import * as Message from '../../constant/message';
import * as URL from '../../constant/config';
import { connect } from 'react-redux';
import * as action from '../../action/addCart';
class index extends Component { 
    constructor(props){
        super(props);
        this.state = {
            checked : true,
            checkProduct : true,
            productList: JSON.parse(localStorage.getItem("cart")),
            activeDe : false,
            id : "",
            deleteAll : false,
            quantity : 1,
            totalItem : 0
        }
    }
    onchange = (e) =>{
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    showCart(){
            var {productList} = this.state;
            var result = "";
            if(productList!== null){
            result = productList.map((product,index) => {
                var price = product.price * product.quantity;
                var imgMain = URL.urlImg + product.img;
                return (
                <div className="cart_items" key={index}>
                    <ul className="cart_list">
                    <li className="cart_item clearfix">
                        <div className="cart_item_image">
                            <div className="checkbox-cart">
                                <label className="container-check">
                                    <input 
                                    type="checkbox"
                                    name="checkProduct" 
                                    defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <Link to={`/product/${product.slug}.${product.id}.html`}><img src={imgMain} alt="cart" /></Link>
                        </div>
                        <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_namec col-5">
                            <Link to={`/product/${product.slug}.${product.id}.html`}>
                                <div className="cart_item_text-name">{product.name}</div>
                            </Link>
                        </div>
                        <div className="cart_item_quantity col-3">
                            <div className="cart_item_text">
                                <div className="number">
                                    <button type="button" className="minus icon-pc1" onClick={() =>this.setMinus(product.id,product.quantity)}>-</button>
                                    <input type="text" className="number-pc01" onChange={this.onchange} value={product.quantity}/>
                                    <button type="button" className="plus icon-pc1" onClick={() =>this.setPlus(product.id,product.quantity)}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="cart_item_price col-3">
                            <div className="cart_price_text">{FormatNumber(price)}</div>
                        </div>
                        <div className="cart_item_total col-1">
                            <div className="cart_item_text"><i className="fas fa-trash-alt" onClick={()=>this.deleteCart(product.id)}></i></div>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
            );
        });
        }
        else{
            result = (
                <div>Rỗng</div>
            )
        }
        return result;
    }
    setMinus = (id,value) =>{
        var quantity = value;
        if(quantity > 1){
            var minus = parseInt(quantity) - 1;
            this.setArrayLocal(id,minus)
        }
    }
    setPlus = (id,value) =>{
        var quantity = value;
        if(quantity < 10){
            var plus = parseInt(quantity) + 1;
            this.setArrayLocal(id,plus)
        }
    }
    setArrayLocal =(id,value)=>{
        var {UpdateCart} = this.props; 
        var {productList} = this.state;
        var productss = "";
        productList.map((products,index) => {
            if(products.id === id){ 
            productss = 
            {
                id : products.id,
                img :products.img,
                name : products.name,
                price : products.price,
                slug :products.slug,
                quantity : value
            }               
                productList.splice(index,1,productss);
                localStorage.setItem("cart",JSON.stringify(productList));
                this.setState({
                    productList : JSON.parse(localStorage.getItem("cart")),
                })
                UpdateCart()
            }
            return 0;
        })
    }
    deleteCart = (id)=>{
        this.setState({
            activeDe : true,
            deleteAll : false,
            id : id
        })
    }
    deleteAllCart =()=>{
        this.setState({
            activeDe : true,
            deleteAll : true
        })
    }
    comfirmDe =()=>{
        var {UpdateCart} = this.props;
        var {productList,deleteAll} = this.state;
        productList = productList || [];
        productList.map((products,index) => {
            if(products.id === this.state.id){                
                productList.splice(index,1);
                localStorage.setItem("cart",JSON.stringify(productList));
            }
            else if(deleteAll){
                localStorage.removeItem("cart")
            }
            return 0;
        })
        this.setState({
            productList: JSON.parse(localStorage.getItem("cart")),
            activeDe : false
        })
        UpdateCart()
    }
    closeDe =() =>{
        this.setState({
            activeDe : false
        })
    }
    render() {
        var {activeDe,deleteAll,productList} =  this.state;
        var active = activeDe ? "block" : "none";
        var messageComfirm =  deleteAll ? Message.DeleteAllCart : Message.DeleteCart;
        let total = 0;
        if(productList !== null){
            productList.map(product =>{
                var price = product.price * product.quantity;
                total = total + price;
                return total
            })
        }
        return (
            <div className="col-12">
                <div className="confirm-de" style={{display : active}}>
                    <div className="md-delete container">
                        <div className="md-delete-tilte">{messageComfirm}</div>
                        <div>
                            <button className="md-delete-bt" type="button" onClick={this.comfirmDe}>Xác nhận</button>
                            <button className="md-delete-bt" type="button" onClick={this.closeDe}>Không</button>
                        </div>
                    </div>
                </div>
                <div className="cart_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb chea-01">
                                        <li className="breadcrumb-item">
                                            <label className="container-check">
                                                <input 
                                                type="checkbox"
                                                name="checkProduct" 
                                                defaultChecked="checked"
                                                />
                                                <span className="checkmark" style={{marginTop : "8px",marginLeft : "27px"}}></span>
                                            </label>
                                        </li>
                                        <li className="breadcrumb-tiem">Chọn tất cả sản phẩm</li>
                                        <li className="breadcrumb-tiem"></li>
                                        <li className="breadcrumb-tiem"></li>
                                        <li className="breadcrumb-tiem"><i className="fas fa-trash-alt" onClick={this.deleteAllCart}/></li>
                                        <li className="breadcrumb-tiem">Xác nhận</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row main-cart">
                            <div className="col-lg-9">
                                {this.showCart()}
                            </div>
                            <div className="col-3">
                                <div className="container-right">
                                    <h4>Thông tin đơn hàng</h4>
                                    <hr />
                                    <p>
                                    <span className="-ncrt001">Tạm tính:</span> <span className="price-cartm">{FormatNumber(total)}</span>
                                    </p>
                                    <hr />
                                    <p>
                                    Tổng tiền:
                                        <span className="price-cart-total">{FormatNumber(total)}</span>
                                    </p>
                                    <Link to="/xac-nhan-don-hang">
                                        <button className="btn-cart" type="button">Xác nhận giỏ hàng</button>
                                    </Link>
                                </div>
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
        UpdateCart : () => {
            dispatch(action.AddCart())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(index);