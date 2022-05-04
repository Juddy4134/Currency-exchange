import React from 'react';
import {ICurrencyInput} from "../../interfaces/Interfaces";
import "./CurrencyInput.css"

const CurrencyInput = (props:ICurrencyInput) => {

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.setInputValue(e.target.value);
        const currentCurrency = props.selectValue
        const requiredRate = props.anotherSelectValue
        const value: number = parseFloat(e.target.value)
        if (currentCurrency === "GRN") {
            //@ts-ignore
            const count: number = value/ props.rates[requiredRate]
            props.setAnotherInputValue(count)
        } else {
            //@ts-ignore
            const toGRN: number = value * props.rates[currentCurrency]
            //@ts-ignore
            const count: number = toGRN / props.rates[requiredRate]
            props.setAnotherInputValue(count)
        }

    }
    function handleSelectChange (e: React.ChangeEvent<HTMLSelectElement>){
        const requiredRate = props.anotherSelectValue
        props.setSelectValue(e.target.value)
        if (e.target.value === "GRN") {
            // @ts-ignore
            const count: number = props.inputValue / props.rates[requiredRate]
            props.setAnotherInputValue(count)
        } else {
            //@ts-ignore
            const toGRN: number = props.inputValue * props.rates[e.target.value]
            //@ts-ignore
            const count: number = toGRN / props.rates[requiredRate]
            props.setAnotherInputValue(count)
        }
    }

    return (
        <div>
            <div className="group">
                <input type="number"
                       value={props.inputValue}
                       onChange={handleInputChange}
                       min={0}
                />
                <select value={props.selectValue} onChange={handleSelectChange}>
                    {props.currencies.map((currency => (
                        <option
                            value={currency}
                            key={props.currencies.indexOf(currency)}>{currency}</option>
                    )))}
                </select>
            </div>
        </div>
    );
};

export default CurrencyInput;