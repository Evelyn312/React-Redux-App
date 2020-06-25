import React from 'react';

const currencyNameCode = [   
        {countryName: "Argentina", currencyCode: "ARS", currencyName: "Argentine Peso"},
        {countryName: "Australia", currencyCode: "AUD", currencyName: "Australian Dollar"},
        {countryName: "Brazil", currencyCode: "BRL", currencyName: "Brazilian Real"},
        {countryName: "Canada", currencyCode: "CAD", currencyName: "Canadian Dollar"},
        {countryName: "Switzerland", currencyCode: "CHF", currencyName: "Swiss Franc"},
        {countryName: "United Kingdom", currencyCode: "GBP", currencyName: "Pound Sterling"},


    ];

const Form = () => {

    return(
        <form>
            <label htmlFor="dollarAmt">

            </label>
            <label htmlFor="currencyCode">
                Please select a country:
                <select id = "currencyCode" name = "currencyCode" >
                    <option value="" >Please Select A Country</option>
                    {
                        currencyNameCode.map((code, key) => {
                            console.log("code", code);
                            return(
                            <option value = {code.currencyCode} key = {key}>{code.countryName}</option>
                            )
                        })
                    }    
                </select>
            </label>
            <button>Select</button>

        </form>
    )
};

export default Form;