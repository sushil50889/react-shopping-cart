import React, {
  Component
} from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import ProducDetails from './components/product-details/ProductDetails';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import ProductCheckout from './components/product-checkout/ProductCheckout';
import OrderConfirmation from './components/order-confirmation/OrderConfirmation';

import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route path="/" component={Home} exact/>
          <Route path="/home" component={Home}/>
          <Route path="/product-details" component={ProducDetails}/>
          <Route path="/shopping-cart" component={ShoppingCart}/>
          <Route path="/product-checkout" component={ProductCheckout}/>
          <Route path="/order-confirmation" component={OrderConfirmation}/>
          <Footer/>
        </div>
      </BrowserRouter>
      );
  }


}

export default App;
