import React, { Component } from 'react';
import Banner from '../components/Home/BannerHome';
import Charaacter from '../components/Home/Characteristics';
import Brands from '../components/Home/Brands';
import Category from '../components/Home/Categories';
import BestSeller from '../components/Home/BestSeller';
import Product from '../components/Home/ProductList';
class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Charaacter/>
                <Category/>
                <BestSeller/>
                <Product/>
                <Brands/>
            </div>
        );
    }
}

export default Home;     