import React, { Component } from 'react';
import {Link} from "react-router-dom";
import CallApi from '../../utils/ApiController';
class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category : []
        }
    }
    getData = async () =>{
        return await CallApi("/category","GET",null).then(resp =>{
            this.setState({
                category : resp.data.data
            })
        })
    }
    componentDidMount(){
        this.getData()
    }
    getCategory = ()=>{
        var {category} = this.state;
        var result = "";
        if(category !== null){
            result = category.map((category,index) =>{
                return (
                    <li key={index}>
                        <Link to={`${category.slug}.${category.categoryId}`}>{category.name}
                            <i className="fas fa-chevron-right ml-auto"></i>
                        </Link>
                    </li>
                );
            })
        }
        return result;
    }
    render() {
        return (
            <div className="cat_menu_container">
                <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                    <div className="cat_burger"><span></span><span></span><span></span></div>
                    <div className="cat_menu_text">Danh mục</div>
                </div>
                <ul className="cat_menu">{this.getCategory()}</ul>
            </div>
        );
    }
}

export default Categories;