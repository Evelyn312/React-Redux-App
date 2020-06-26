import React from 'react'

const currencyNameCode = [   
    {countryName: "Argentina", currencyCode: "ARS", currencyName: "Argentine Peso"},
    {countryName: "Australia", currencyCode: "AUD", currencyName: "Australian Dollar"},
    {countryName: "Brazil", currencyCode: "BRL", currencyName: "Brazilian Real"},
    {countryName: "Canada", currencyCode: "CAD", currencyName: "Canadian Dollar"},
    {countryName: "Switzerland", currencyCode: "CHF", currencyName: "Swiss Franc"},
    {countryName: "United Kingdom", currencyCode: "GBP", currencyName: "Pound Sterling"},


];

const FormToDollars = () => {
    return (
        <form>
            <label>
                <input
                    placeholder="Amount"
                    type="interger"
                />
            </label>
            <label>
                <select>
                    <option>Please Choose Currency</option>
                    {
                        currencyNameCode.map((code, key) => {
                            return(
                            <option value = {code.currencyCode} key = {key}>{code.countryName} Money</option>
                            )
                        })
                    }
                </select>
            </label>
            <button>Convert To US Dollars</button>
        </form>
    )
}

export default FormToDollars;