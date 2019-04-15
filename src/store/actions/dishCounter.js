import * as actionTypes from './actionTypes';

export const onAddItem = (item) => {
    return {type: actionTypes.INCREMENT_ITEM, item}
}

export const reduceItem = (item) => {
    return {type: actionTypes.REDUCE_ITEM, item}
}