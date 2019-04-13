import React from 'react';
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../../HOC/_Aux'
import './Modal.css';

const modal = (props) => {
    return (
        <Aux>
                <Backdrop show={props.showModal} clicked={props.closed} />
                <div className="Modal" style= {{
                    opacity: props.showModal ? 1 : 0,
                    transform: props.showModal ? 'translateY(0px)' : 'translateY(20vh)',
                    display: props.showModal ? 'block' : ' none'
                }}>
                        <h1>Checkout</h1>
                        <hr></hr>
                        <div className="content">
                            {props.children}
                        </div>
                </div>
        </Aux>
    );
}

export default modal;