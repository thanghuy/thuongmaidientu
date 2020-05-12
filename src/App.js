import React, { Component } from 'react';
import './assets/main_styles.css';
import './assets/responsive.css';
import './assets/home.css';
// import Layout from './components/Web/layout';
import Layout from './Router';
class App extends Component {
  render(){
    return (
      <div className="super_container">
        <Layout/>
      </div>
    );
  }
}

export default App;

