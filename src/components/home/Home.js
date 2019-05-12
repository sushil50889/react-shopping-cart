import React from 'react';
// import PropTypes from 'prop-types'
// import Navbar from './components/layout/Navbar';
import Bannerarea from './Bannerarea';
import Featurearea from './Featurearea';
import Category from './Category';
import Products from './Products';
import Brands from './Brands';
import RelatedProducts from './RelatedProducts';
// import Footer from './components/layout/Footer';
import '../../App.css';



class Home extends React.Component {


  render() {
    return ( <
      div >
      <
      Bannerarea / >
      <
      Featurearea / >
      <
      Category / >
      <
      Products / >
      <
      Brands / >
      <
      RelatedProducts / >
      <
      /div>
    );
  }


}

export default Home;
