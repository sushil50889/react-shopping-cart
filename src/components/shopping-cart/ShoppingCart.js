import React from 'react';
import Header from '../product-details/Header';
import CartArea from './CartArea';

class ShoppingCart extends React.Component {
    render() {
        return (
          <div>
            <Header/>
            <CartArea/>
          </div>
        );
    }
}

export default ShoppingCart;
