import React from 'react';
import Button from  '../../components/UI/Button/Button'
import './OrderSummary.css';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const OrderSummary = (props) => {
    return (
        <div>
            <h1>Order Summary</h1>
            <hr></hr>
            <p style={{textAlign: 'center'}}>Total: <span>$ {props.rTotal < 0 ? 0 : props.rTotal.toFixed(2)}</span></p>
            <Button btnType="green" clicked={() =>  {props.onCheckout(); props.openModal(); }} >BUY!</Button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        rTotal : state.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCheckout: () => dispatch(actionCreators.onCheckout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);