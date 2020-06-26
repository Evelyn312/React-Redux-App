import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {dollarToSubmit} from '../actions';
import Loader from 'react-loader-spinner';
import { getExchangeRate} from '../actions'

const currencyNameCode = [   
        {countryName: "Argentina", currencyCode: "ARS", currencyName: "Argentine Peso"},
        {countryName: "Australia", currencyCode: "AUD", currencyName: "Australian Dollar"},
        {countryName: "Brazil", currencyCode: "BRL", currencyName: "Brazilian Real"},
        {countryName: "Canada", currencyCode: "CAD", currencyName: "Canadian Dollar"},
        {countryName: "Switzerland", currencyCode: "CHF", currencyName: "Swiss Franc"},
        {countryName: "United Kingdom", currencyCode: "GBP", currencyName: "Pound Sterling"},


    ];

const FormDollarsTo = (props) => {

    const [dollarAmount, setDollarAmount] = useState('');
    const [code, setCode] = useState('');

    const handleChanges = e => {
        e.preventDefault();
        console.log(" dollar enter", e.target.value)
        setDollarAmount(e.target.value);
    };
    
    const updatingCode = e => {
        e.preventDefault();
        console.log("code selected", e.target.value)
        setCode(e.target.value)
    }
    
    const submitHandler = e => {
        e.preventDefault();
        props.dollarToSubmit(dollarAmount, code)
    }

    useEffect(() => {
        props.getExchangeRate();
    },[])

    const dollarToConv = () => {
        console.log("rate", props.apiData.rate)
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="dollarAmount">
                    <input
                        name="dollarAmount"
                        id="dollarAmount"
                        type="int"
                        placeholder="Dollar amount to be converted"
                        value={dollarAmount}
                        onChange={handleChanges}
                    />
                    US Dollars
                </label>
                
                <label htmlFor="currencyCode">
                    Change to:
                    <select 
                        id = "currencyCode" 
                        name = "currencyCode" 
                        onChange = {updatingCode}
                        value={code}
                    >
                        <option value="" >Please Select A Country</option>
                        {
                            currencyNameCode.map((code, key) => {
                                return(
                                <option value = {code.currencyCode} key = {key}>{code.countryName} Money</option>
                                )
                            })
                        }    
                    </select>
                </label>
                <button>Convert</button>
                

            </form>
            {props.isFetching && <Loader
                         type="Puff"
                         color="#00BFFF"
                         height={100}
                         width={100}
            />}
            <div>
                    <p>${dollarAmount} dollars is {dollarToConv()}  </p>
            </div>
        </>
    )
};
const mapStateToProps = state => {
    return{
        apiData: state.apiData.rate
    }
}

const mapDispatchToProps = {
    dollarToSubmit,
    getExchangeRate
}
export default connect (mapStateToProps, mapDispatchToProps)(FormDollarsTo);