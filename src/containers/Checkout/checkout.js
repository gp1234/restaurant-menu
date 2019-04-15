import React from 'react';
import Card from '../../components/UI/Card/Card'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/input'

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import './checkout.css';

const checkout = (props) => {
    const nPrices = props.prices.reduce((obj, dish) => {
        obj[dish.name] = dish.price;
        return obj;
    }, {});
    const nImages = props.prices.reduce((obj, dish) => {
        obj[dish.name] = dish.img;
        return obj;
    }, {});

    const dishesToRender = Object.keys(props.dishes)
                    .map((dish , key) => {
                        return (
                        <Card key={key}>
                            <div className="checkout__dish__container-total">
                            <div className="checkout__dish__container">
                                <img src={nImages[dish]} className="checkout__dish-img" alt="Food Image"/>
                                <div className="checkout__dish__information">
                                    <h2  className="checkout__dish-title"><strong>{dish} </strong></h2>
                                    <div><strong>Quantity : </strong> {props.dishes[dish]}</div>    
                                    <span className="checkout__dish-price"><strong>US$ {nPrices[dish]}</strong></span>    
                                </div>
                            </div>
                            <Input res={() => props.onReduceItem({ name: dish , price : nPrices[dish]})} sum={() =>  props.onAddItem({ name: dish , price : nPrices[dish]} )}  elementType="controls" val={props.dishes[dish]} />
                            </div>
                            
                        </Card>
                        )
                    });
    return (
        <>    
        <h1>Checkout Page</h1>
        <div className="checkout-panel">
            <div className="checkout__list">
                {dishesToRender}
            </div>
            <div className="checkout__payment">
            <Card>Thank you!</Card>
            <Card>
                <div className="checkout__payment-total">
                    <h2 className="checkout__payment--h2">Total</h2>
                    <span className="checkout__dish-price"><strong>US$ {props.totalPrice.toFixed(2)} </strong></span>
                </div>
                <Button btnType={"green rounded"}>Comprar Ahora</Button>    
            </Card>
            </div>
            <div className="checkout__recordatorio">
                <cite>
                "Fue sin querer queriendo"
                </cite>
            </div>
        </div>
        </>

    );
};

const mapStateToProps = state => {
    return {
        dishes : state.quantity,
        prices: state.dishes,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: (item) => dispatch(actionCreators.onAddItem(item)),
        onReduceItem: (item) => dispatch(actionCreators.reduceItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(checkout);