import React, {Component} from 'react';
import Dish from '../Dish/Dish'
import './Menu.css';


const menu = (props) => {
    const menu = props.items.map((dish, key) => {
        return (<Dish key={key} name={dish.name} price={dish.price} sumItm={props.sumItem} rditem={props.reditem} qty={props.quantity}></Dish>);
    })

    return (
    <div className="menu">
        {menu}
    </div>)
}
export default menu;