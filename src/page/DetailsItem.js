import React, { Component } from 'react';
// import ImgProduct from './ImgProduct';
import InforProduct from '../components/DetailsItem/InforProduct';
import DetailPro from '../components/DetailsItem/productDetails';
import ProductReview from '../components/DetailsItem/productReviews';
import '../assets/detailProduct.css';
import '../assets/detail_reponsive.css';
import CallApi from '../utils/ApiController';
class Detailitem extends Component {
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            OneProduct : ""
        }
    }
    getDataDetail = async (idBook) =>{
        return await CallApi("/book/"+idBook,"GET",null).then(resp =>{
            this.setState({
                OneProduct : resp.data.data
            })
        })
    }
    componentDidMount(){
        var {match} = this.props;
        let idBook = match.params.id;
        this.getDataDetail(idBook)
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    render() {
        return (
            <div className="col-12">
                <div className="container">
                    <InforProduct OneProduct={this.state.OneProduct}/>
                    <DetailPro/>
                    <ProductReview OneProduct={this.state.OneProduct}/>
                </div>
            </div>
        );
    }
}

export default Detailitem;