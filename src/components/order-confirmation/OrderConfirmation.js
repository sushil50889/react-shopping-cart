import React from 'react';
import Header from '../product-details/Header';
import ConfirmationArea from './ConfirmationArea';

class OrderConfirmation extends React.Component {
    render() {
        return (
          <div>
            <Header/>
            <ConfirmationArea/>
          </div>
        );
    }
}

export default OrderConfirmation;
