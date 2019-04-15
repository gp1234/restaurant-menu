import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from  '../../components/UI/Button/Button'
import './dish.css';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'

class Dish extends Component {

    render() {
        let item = {name: this.props.name, price: this.props.price}
        return (
            <div className="dish">
                
                <div className="quantity"><span className="number">{!this.props.rquantity[this.props.name] ? 0 : this.props.rquantity[this.props.name]}</span></div>
                <Link to={{
                    pathname: '/dish/' + this.props.id,
                    search: '?delcious=5',
                    hash: '#form'
                }}> <h1>{this.props.name}</h1> </Link>
                <p className="price">$ {this.props.price}</p>
                <Button btnType="red" clicked={() => this.props.onAddItem(item)}>SELECT</Button>
                <Button btnType="blue" clicked={()=> this.props.onReduceItem(item)}>REMOVE</Button>
    
            </div>
        );
        
    }
};
const mapStateToProps = state => {
    return {
        rquantity: state.quantity
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: (item) => dispatch({type: actionTypes.INCREMENT_ITEM, item}),
        onReduceItem: (item) => dispatch({type: actionTypes.REDUCE_ITEM, item})
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Dish);