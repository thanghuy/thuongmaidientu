import React, { Component } from 'react';
import sreach from '../../images/search.png';
import '../../assets/header.css';
import { withRouter } from 'react-router';
class Search extends Component {
    render() {
        return (
            <div className="col-lg-7 col-12 order-lg-2 order-3 text-lg-left text-right">
                <div className="header_search">
                    <div className="header_search_content">
                    <div className="header_search_form_container">
                        <form action="/search" className="header_search_form clearfix">
                        <input type="search" className="header_search_input" placeholder="Tìm kiếm trên tahuta..."></input>
                        <button type="submit" className="header_search_button trans_300" value="Submit">
                            <img src={sreach} alt="sreach"></img>
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Search);