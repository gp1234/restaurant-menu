import React, {Component}  from 'react';
import Menu from '../../components/Menu/Menu';
import OrderSumary from '../../components/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/ModalContent/Modal'
import Button from '../../components/UI/Button/Button'
import Checkout from '../Checkout/checkout'

import { connect } from 'react-redux';

import './MenuBuilder.css'


class MenuBuilder extends Component {
    
    state = {
        checkout: false
    }

    closeModal = () => {
        this.setState({checkout: false})
    }

    openModal = () => {
        this.setState({checkout: true})
    }

    pay = () => {
        this.props.history.replace('/checkout')
    }

    render() {
        let sub = this.props.subtotal.map(element => (
            <li className="cuenta">     
                <span><strong>Item : </strong>{element.name}</span>
                <span><strong>Quantity: </strong>{element.quantity}  </span>
                <span><strong>Total: </strong>{element.price.toFixed(2)}</span>
                
            </li>
        ))
        return (
            <div className="container">
            <h1>Mexican Menu</h1>
            <hr/>
            <div className="MenuWrapper">
                <Modal showModal={this.state.checkout} closed={this.closeModal}> 
                    <ul>
                        {sub}
                    </ul>
                    <hr/>
                    <strong>Total: </strong> <p>$ {this.props.totalPrice.toFixed(2)}</p>
                    {this.props.totalPrice > 0 ? (<Button btnType="green noBig" clicked={this.pay}>ORDER</Button>)  : ''}
                </Modal>
                <Menu  items={this.props.dishes} />
                <OrderSumary openModal={this.openModal}/>
            </div>
               
        </div> 
        );
    }
};

const mapStateToProps = state => {
    return {
        totalPrice : state.totalPrice,
        checkout: state.checkout,
        subtotal: state.subtotal,
        dishes: state.dishes
    }
};



export default connect(mapStateToProps)(MenuBuilder);