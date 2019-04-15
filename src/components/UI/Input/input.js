import React, { Component } from 'react';
import './input.css';


class Input extends Component {
   

    render() {
        let element = null;
        switch(this.props.elementType) 
        {
            case 'input':
                element =  (<input type="text" className="text" {...this.props.elementConfig} />)
            break;
    
            case 'textarea':
                element = (<textarea rows="4" col="50"/>)
            break;
            case 'controls':
                element = 
                (       
                <div className="controlsContainer" style={this.props.styles}>
                        <input type="button" onClick={this.props.res} className="minus" value="-" />
                            <input type="number" className="number" value={this.props.val} step="1" min="0" max=""/>
                        <input type="button"  onClick={this.props.sum} className="plus" value="+"/>
                </div>
    );      
            break;
            default:
                element =  (<input type="text" className="text" {...this.props.elementConfig} />)
            }
    
        return (
            <div className="inputContainer">
               {this.props.elementType !== 'controls' ? (<label for={this.props.elementConfig ? this.props.elementConfig : null }>{this.props.title.toUpperCase()}</label>) : null} 
                {element}
            </div>
        );
    }

};

export default Input;