import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import AppRouter from './common/AppRouter';
import ScrollToTop from './common/ScrollToTop';
import NotFound from './page/NotFound';
import Home from './page/Home';
import ProductContainer from './page/Product';
import Detail from './page/DetailsItem';
import Cart from './page/Cart';
import Address from './page/Address';
import OrderComfirm from './page/OrderComfirm';
import ManagerUser from './page/ManagerUser';
import Signup from './page/Signup.js';
import Payment from './page/Payment';
import CallApi from './utils/ApiController';
export default class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category : []
        }
    }
    getDataCategory = async ()=>{
        await CallApi("/category","GET",null).then(resp =>{
            this.setState({
                category : resp.data.data
            })
        })
    }
    componentDidMount(){
        this.getDataCategory()
    }
    getCategory = () =>{
        var {category} = this.state;
        var result = "";
        if(category !== ""){
            result = category.map((category,index)=>{
                return(
                    <AppRouter key={index} path={`/${category.slug}.:${category.categoryId}`} exact component={ProductContainer} />
                )
            })
        }
        return result
    }
    render(){
        return(
            <Router>
                <ScrollToTop>
                    <Switch>
                        <AppRouter key='1h' path='/' exact component={Home} />
                        {this.getCategory()}
                        <AppRouter key='3se' path='/search' exact component={Detail} />
                        <AppRouter key='3d' path='/product/:name.:id.html' exact component={Detail} />
                        <AppRouter key='4c' path='/cart' exact component={Cart} />
                        <AppRouter key='5a' path='/nhap-dia-chi' exact component={Address} />
                        <AppRouter key='6o' path='/xac-nhan-don-hang' exact component={OrderComfirm} />
                        <AppRouter key='7p' path='/xac-nhan-thanh-toan' exact component={Payment} />
                        <AppRouter key='8m' path='/user/:name' exact component={ManagerUser} />
                        <AppRouter key='9s' path='/signup' exact component={Signup} />
                        <Route path="" exact={false} component={NotFound}/>
                    </Switch>
                </ScrollToTop>
            </Router>
        )
    }
}