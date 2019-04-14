import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import Dish from '../Dish/Dish'
import './Menu.css';


const menu = (props) => {
    const menu = props.items.map((dish, key) => {
        return ( <Dish id={dish.id} key={key} name={dish.name} price={dish.price} ></Dish>);
    })
    return (
    <div className="menu">
        {menu}
    </div>)
}
export default withRouter(menu);