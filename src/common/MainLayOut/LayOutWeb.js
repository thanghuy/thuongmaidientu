import React, { Component } from 'react'
import Header from '../../components/Layout/header';
import Footer from '../../components/Layout/footer';
export default class MainLayOut extends Component {  
  render() {
    return (
      <div>
          <Header/>
            {this.props.children}
          <Footer/>
      </div>
    )
  }
}
