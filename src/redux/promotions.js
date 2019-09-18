import * as ActionTypes from './ActionTypes';
import { actions } from 'react-redux-form';

export const Promotions = (state = {
    isLoading: true,
    errMess: null,
    promotions: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_PROMOS : 
            return {...state, isLoading:false, errMess: null, promotions: action.payload}
        case ActionTypes.PROMOS_LOADING: 
            return {...state, isLoading: true, errMess: null, promotions: []}
        case ActionTypes.PROMOS_FAILED:
            return { ...state, isLoading:false, errMess: actions.payload}
        default:
            return state;
    }
};