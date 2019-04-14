import * as actionTypes from './actions';

const initialState = {
    dishes : [
        {id: 1, name: 'Salad', description: 'Onion/Salad', price: 13},
        {id: 2, name: 'Burrito', description: 'Onion/Salad', price: 15},
        {id: 3, name: 'Taco', description: 'Onion/Salad', price: 11.8},
        {id: 4, name: 'Coffe', description: 'Onion/Salad', price: 1.2}
    ],
    order: [],
    subtotal: [],
    totalPrice: 0,
    checkout: false,
    quantity: {}
}

const reducer = (state = initialState, action ) => {
    switch(action.type) 
    {
        case actionTypes.INCREMENT_ITEM:
            let orders = [...state.order];
            orders.push(action.item);

            let nTotal = orders.reduce((obj, item) => {
                if(!obj[item.name])
                {
                    obj[item.name] = 0;
                }
                obj[item.name]++;
                return obj
            }, {});


            let newPrice = state.totalPrice;
            newPrice += action.item.price;
            return {
                ...state,
                totalPrice: newPrice, 
                order: orders, 
                quantity: nTotal
            }
        case actionTypes.REDUCE_ITEM:
            
            if(state.quantity[action.item.name] === undefined) return state;
            let rOrders = [...state.order];
            let indexOrder = rOrders.map(el => el.name).indexOf(action.item.name)
            
            rOrders.splice(indexOrder,1);
            
             let rTotal = rOrders.reduce((obj, item) => {
                if(!obj[item.name])
                {
                    obj[item.name] = 0;
                }
                obj[item.name]++;
                return obj
            }, {});
            
            let rNewPrice = state.totalPrice;
            rNewPrice -= action.item.price;

            return {
                ...state,
                totalPrice: rNewPrice, 
                order: rOrders, 
                quantity: rTotal
            }
            
        case actionTypes.CHECKOUT_ORDER :
            let prices = {};
            let total = [...state.order];
            let cTotal = total.reduce((obj, item) => {
                if(!obj[item.name])
                {
                    obj[item.name] = 0;
                }
                obj[item.name]++;
                return obj
            }, {});

            state.dishes.forEach(dish => {
                prices[dish.name] = dish.price
            })

            let subtotalState = Object.keys(cTotal)
            .map(key => {
                return {
                    name: key, price: cTotal[key] * prices[key], quantity: cTotal[key]
                 }
            })
            console.log(subtotalState + " state ")
            return {
                ...state,
                subtotal: subtotalState
            }
    }
    return state;
}

export default reducer;
