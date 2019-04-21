import React from 'react';
import Header from '../product-details/Header';
import CheckoutArea from './CheckoutArea';

class ProductCheckout extends React.Component {
    render() {
        return (
          <div>
            <Header/>
            <CheckoutArea/>
          </div>
        );
    }
}

export default ProductCheckout;
