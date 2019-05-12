import React from 'react';
import Header from './Header';
import ProductArea from './ProductArea';
import Description from './Description';
import '../../App.css';

class ProductDetails extends React.Component {
  render () {
    return(
      <div>
        <Header/>
        <ProductArea/>
        <Description/>
      </div>
    );
  }
}

export default ProductDetails;
