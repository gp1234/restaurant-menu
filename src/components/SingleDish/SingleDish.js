import React from 'react';
import './SingleDish.css';
import Input from '../../components/UI/Input/input'

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index'

const singleDish  = (props) => {
    const dish = props.dishes.find(dish => dish.id == props.match.params.id);
    return (
        <div className="single-dish">
            <img className="single-dish__img" src={dish.img} alt="Delicious Dish"/>
            <div className="single-dish__information">
                <h1>{dish.name}</h1>
                <p>{dish.description}</p>
                <Input res={() => props.onReduceItem({ name: dish.name, price: dish.price})} sum={() =>  props.onAddItem({ name: dish.name , price : dish.price } )} val={props.quantity[dish.name] || 0} elementType="controls" />
            </div>
        </div>
        
    );
}

const mapStateToProps = state => {
    return {
        quantity : state.quantity,
        dishes: state.dishes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: (item) => dispatch(actionCreators.onAddItem(item)),
        onReduceItem: (item) => dispatch(actionCreators.reduceItem(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(singleDish);