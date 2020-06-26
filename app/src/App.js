import React from 'react';
import { connect } from 'react-redux';


import {changeToDollars, changeToOther} from './actions';
import './App.css';
import FormDollarsTo from './components/FormDollarsTo';
import FormToDollars from './components/FormToDollars';

const App = (props) => {
  return (
    <div>
        <h1>Welcome To The Currency Converter</h1>
        <button onClick= { props.changeToDollars}>Convert From US Dollars To Other Currency</button>
        <button onClick= {props.changeToOther}>Convert Other Currency to US Dollars</button>
        {
          props.dollarToOtherCurrency ? <FormDollarsTo /> : null
        }
        {
          props.otherCurrencyToDollars ? <FormToDollars /> : null
        }
        
    </div>
  );
}

const mapStateToProps = state => {
  console.log('state',state)
  return {
      dollarToOtherCurrency: state.dollarToOtherCurrency,
      otherCurrencyToDollars: state.otherCurrencyToDollars,
      dollarAmount: state.dollarAmount,
      code: state.code
  }
}
const mapDispatchToProps = {
  changeToDollars,
  changeToOther
}

export default connect (mapStateToProps, mapDispatchToProps) (App);
