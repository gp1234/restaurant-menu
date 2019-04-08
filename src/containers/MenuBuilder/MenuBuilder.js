import React, {Component}  from 'react';
import Menu from '../../components/Menu/Menu';
import OrderSumary from '../../components/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/ModalContent/Modal'

import './MenuBuilder.css'


class MenuBuilder extends Component {
    
    state = {
        dishes : [
            {name: 'Salad', description: 'Onion/Salad', price: 13},
            {name: 'Burrito', description: 'Onion/Salad', price: 15},
            {name: 'Taco', description: 'Onion/Salad', price: 11.8},
            {name: 'Coffe', description: 'Onion/Salad', price: 1.2},
        ],
        order: [],
        subtotal: [],
        totalPrice: 0,
        checkout: false,
        quantity: {}
    }

    sumOrder(item) {
        
        let orders = [...this.state.order];
        orders.push(item);

        let nTotal = orders.reduce((obj, item) => {
            if(!obj[item.name])
            {
                obj[item.name] = 0;
            }
            obj[item.name]++;
            return obj
        }, {})

        let newPrice = this.state.totalPrice;
        newPrice += item.price;
        this.setState({totalPrice: newPrice, order: orders, quantity: nTotal})


    }

    reduceOrder(item) {

        if(this.state.quantity[item.name] == undefined) return;
        
        let orders = [...this.state.order];
        let indexOrder = orders.map(el => el.name).indexOf(item.name)
        
        orders.splice(indexOrder,1);

        let nTotal = orders.reduce((obj, item) => {
            if(!obj[item.name])
            {
                obj[item.name] = 0;
            }
            obj[item.name]++;
            return obj
        }, {})
        
        let newPrice = this.state.totalPrice;
        newPrice -= item.price;
        this.setState({totalPrice: newPrice, order: orders, quantity: nTotal})
    }
    
    checkoutOrder = () => {
        let prices = {};
        let total = [...this.state.order];
        let nTotal = total.reduce((obj, item) => {
            if(!obj[item.name])
            {
                obj[item.name] = 0;
            }
            obj[item.name]++;
            return obj
        }, {})

        this.state.dishes.forEach(dish => {
            prices[dish.name] = dish.price
        })

        let subtotalState = Object.keys(nTotal)
            .map(key => {
                return {
                    name: key, price: nTotal[key] * prices[key], quantity: nTotal[key]
                 }
            })
        

        this.setState((prevState) => {
            return {checkout: !prevState.checkout,
                    subtotal: subtotalState}
        })
    }

    closeModal = () => {
        this.setState({checkout: false})
    }

    render() {
        let sub = this.state.subtotal.map(element => (
            <li className="cuenta">     
                <span><strong>Item : </strong>{element.name}</span>
                <span><strong>Quantity: </strong>{element.quantity}  </span>
                <span><strong>Total: </strong>{element.price.toFixed(2)}</span>
                
            </li>
        ))
        return (
            <div className="MenuWrapper">
                <Modal showModal={this.state.checkout} closed={this.closeModal}> 
                    <ul>
                        {sub}
                    </ul>
                    <hr/>
                    <strong>Total: </strong> <p>$ {this.state.totalPrice.toFixed(2)}</p>

                </Modal>
                <Menu  quantity={this.state.quantity} items={this.state.dishes} reditem={(price) => this.reduceOrder(price)} sumItem={(type) => this.sumOrder(type)}/>
                <OrderSumary total={this.state.totalPrice} checkout={this.checkoutOrder}/>
            </div>
        );
    }
};

export default MenuBuilder;