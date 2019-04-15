import * as actionTypes from './actions/actionTypes';

const initialState = {
    dishes : [
        {id: 1, name: 'Salad', description: 'A salad is a dish consisting of a mixture of small pieces of food, usually vegetables.', price: 13, img: 'https://source.unsplash.com/OzBLe_Eg1mg'},
        {id: 2, name: 'Burrito', description: 'A burrito is a dish in Mexican and Tex-Mex cuisine that consists of a flour tortilla with various other ingredients.', price: 15, img: 'https://source.unsplash.com/wYwbs_bsmaM'},
        {id: 3, name: 'Taco', description: 'A taco is a traditional Mexican dish consisting of a corn or wheat tortilla folded or rolled around a filling.', price: 11.8, img: 'https://source.unsplash.com/2hBUvhe81mU'},
        {id: 4, name: 'Coffe', description: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ', price: 1.2, img: 'https://source.unsplash.com/Dt9kdskj6ek'}
    ],
    order: [],
    subtotal: [],
    totalPrice: 0,
    cartReady: false,
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
            if (Object.entries(state.quantity).length === 0) return {
                ...state,
                cartReady: false
            }
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
            return {
                ...state,
                subtotal: subtotalState,
                cartReady: true
            }
    }
    return state;
}

export default reducer;
