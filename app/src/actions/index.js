
import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAIL = "FETCHING_DATA_FAIL";

export const getData = () => dispatch => {
    dispatch({type: FETCHING_DATA_START});
    axios
        .get('https://open.exchangerate-api.com/v6/latest')
        .then (res => {
            console.log("res", res);
            dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data})
        })
        .catch (err => {
            console.log(err);
            dispatch({
                type: FETCHING_DATA_FAIL,
                paylod: error.response.message
            });
        });

};