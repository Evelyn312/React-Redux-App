
import axios from 'axios';

export const DOLLAR_TO_OTHER_CURRENCY = 'DOLLAR_TO_OTHER_CURRENCY';
export const OTHER_CURRENCY_TO_DOLLARS = 'OTHER_CURRENCY_TO_DOLLARS';
export const DOLLAR_TO_FORM = 'DOLLAR_TO_FORM';


export const FETCHING_EXCHANGE_RATE_START = 'FETCHING_EXCHANGE_RATE_START';
export const FETCHING_EXCHANGE_RATE_SUCCESS = 'FETCHING_EXCHANGE_RATE_SUCCESS';
export const FETCHING_EXCHANGE_RATE_FAIL = "FETCHING_EXCHANGE_RATE_FAIL";



export function changeToDollars(){
    return { type: 'DOLLAR_TO_OTHER_CURRENCY'}
}
export const changeToOther = () => {
    return { type: 'OTHER_CURRENCY_TO_DOLLARS'}
}

export const dollarToSubmit = (dollarAmount, code) => {
    console.log("formsubmited");
    const payloadObject = {
        dollarAmount, code
    }
    return { type: 'DOLLAR_TO_FORM', payload: payloadObject}
}
export const getExchangeRate = () => dispatch => {
    dispatch({type: FETCHING_EXCHANGE_RATE_START});
    axios
        .get('https://open.exchangerate-api.com/v6/latest')
        .then (res => {
            console.log("res", res);
            dispatch({ type: FETCHING_EXCHANGE_RATE_SUCCESS, payload: res.data})
        })
        .catch (err => {
            console.log(err.response);
            dispatch({
                type: 'FETCHING_EXCHANGE_RATE_FAIL',
                payload: err.response.message
            });
        });

};