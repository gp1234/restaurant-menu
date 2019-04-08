import React from 'react';
import Button from  '../../components/UI/Button/Button'
import './OrderSummary.css';

const OrderSummary = (props) => {
    return (
        <div>
            <h1>Order Summary</h1>
            <hr></hr>
            <p style={{textAlign: 'center'}}>Total: <span>$ {props.total < 0 ? 0 : props.total.toFixed(2)}</span></p>
            <Button btnType="green" clicked={props.checkout}>BUY!</Button>
        </div>
    );
}

export default OrderSummary;