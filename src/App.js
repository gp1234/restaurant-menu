import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect} from 'react-router-dom';
import { connect  } from 'react-redux';

import SingleDish from './components/SingleDish/SingleDish'
import MenuBuilder from './containers/MenuBuilder/MenuBuilder'
import AboutUs from './containers/AboutUs/Aboutus'
import Checkout from './containers/Checkout/checkout'
import NotFound from './containers/404/404'
import Form from './containers/Form/Form'


import './App.css';



class App extends Component {

  render() {
    return (
      <>
      <Router >
        <header className="header">
          <Link to="/" > <img src="https://source.unsplash.com/drUv03GxoRI" className="logo" /> </Link>
            <ul className="menu-ul ">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/about-us">About Us</NavLink></li>
              <li><NavLink to="/form">Contact Us</NavLink></li>
              {this.props.cart ?  (<li><NavLink to="/checkout">Checkout</NavLink></li>) : null}
             
            </ul>
        </header>
        <Switch>
          <Route path="/about-us"  render={AboutUs} /> 
          <Route path="/form"  component={Form} /> 
          <Route path="/dish/:id" component={SingleDish} />
          {this.props.cart ? <Route path="/checkout" component={Checkout}/> : null}
          <Route path="/index"   component={MenuBuilder} />

          <Redirect exact from="/" to="index"/>
          <Route render={NotFound} /> 
        </Switch>
      </Router>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReady
  }
}

export default connect(mapStateToProps)(App);
