import React from 'react';
import Card from '../../components/UI/Card/Card'

import './checkout.css';

const checkout = () => {
    return (
        <>    
        <h1>Checkout Page</h1>
        <div className="checkout-panel">
            <div className="checkout__list">
                <Card>Course 1</Card>
                <Card>Course 1</Card>
                <Card>Course 1</Card>
            </div>
            <div className="checkout__payment">
                Payment Box
            </div>
            <div className="checkout__recordatorio">Recordatorio</div>
        </div>
        </>

    );
};

export default checkout;