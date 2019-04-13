import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from  '../../components/UI/Button/Button'
import './dish.css';

class Dish extends Component {

    componentWillMount() {

    }
    render() {
        let item = {name: this.props.name, price: this.props.price}
        return (
            <div className="dish">
    
                <div className="quantity"><span className="number">{this.props.qty[this.props.name] || 0}</span></div>
                <Link to={{
                    pathname: '/dish/' + this.props.id,
                    search: '?delcious=5',
                    hash: '#form'
                }}> <h1>{this.props.name}</h1> </Link>
                <p className="price">$ {this.props.price}</p>
                <Button btnType="red" clicked={() => this.props.sumItm(item)}>SELECT</Button>
                <Button btnType="blue" clicked={()=> this.props.rditem(item)}>REMOVE</Button>
    
            </div>
        );
        
    }
};

export default  Dish;