import {DOLLAR_TO_OTHER_CURRENCY,OTHER_CURRENCY_TO_DOLLARS,DOLLAR_TO_FORM,FETCHING_EXCHANGE_RATE_START,FETCHING_EXCHANGE_RATE_SUCCESS,FETCHING_EXCHANGE_RATE_FAIL} from '../actions';

const initialState = {
    dollarToOtherCurrency: false,
    otherCurrencyToDollars: false,
    dollarToForm: '',
    apiData: '',
    isFetching: false,
    error: ''
}

export const appReducer = (state = initialState, action) => {
    console.log('from reducer ', action)
    switch(action.type){
        case DOLLAR_TO_OTHER_CURRENCY:
            return{
                ...state,
                dollarToOtherCurrency: true
            }
        case OTHER_CURRENCY_TO_DOLLARS:
            return {
                ...state,
                otherCurrencyToDollars: true
            }
        case DOLLAR_TO_FORM:
            // console.log("reducer, dollarform", action.payload)
            return{
                ...state,
            
                dollarAmount: action.payload.dollarAmount,
                code: action.payload.code
            }
        case FETCHING_EXCHANGE_RATE_START:
            return{
                ...state, 
                isFetching: true
            }
        case FETCHING_EXCHANGE_RATE_SUCCESS:
            return{
                ...state,
                apiData: action.payload,
                isFetching: false
            }
        case FETCHING_EXCHANGE_RATE_FAIL:
            return{
                ...state
            }
        default:
            return state;
    }
};