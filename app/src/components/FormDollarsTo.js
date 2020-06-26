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
    const [selectedCode, setSelectedCode] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [result, setResult] = useState('');

    const handleChanges = e => {
        e.preventDefault();
        setDollarAmount(e.target.value);
    };
    
    const updatingCode = e => {
      
        console.log("code selected", e.target.value)
        setSelectedCode(e.target.value)
        // const curName = currencyNameCode.find(o => o.currencyCode === e.target.value);
        // setSelectedCountry(curName.currencyName)

    }
    
    const submitHandler = e => {
        e.preventDefault();
        props.dollarToSubmit(dollarAmount, selectedCode)
        convertFromDollar(dollarAmount, props.apiData,selectedCode)
        const curName = currencyNameCode.find(o => o.currencyCode === selectedCode);
        setSelectedCountry(curName.currencyName)
    }

    useEffect(() => {
        props.getExchangeRate();
    },[])

    const convertFromDollar = (dollarAmount,rate,selectedCode) => {

        const trueRate = rate.rates ? rate.rates[selectedCode]: null
        setResult(dollarAmount * trueRate);
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
                        value={selectedCode}
                    
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
            <p>${dollarAmount} dollars is {result} for {selectedCountry}</p>
            </div>
        </>
    )
};
const mapStateToProps = state => {
    return{
        apiData: state.apiData,
        isFetching: state.isFetching
    }
}

const mapDispatchToProps = {
    dollarToSubmit,
    getExchangeRate
}
export default connect (mapStateToProps, mapDispatchToProps)(FormDollarsTo);