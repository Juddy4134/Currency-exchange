import React, {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import axios from "axios";
import CurrencyInput from "./components/CurrencyInput/CurrencyInput";
import {IRates} from "./interfaces/Interfaces";
import "./App.css"



function App() {
    const [eurValue,setEurValue] = useState(0);
    const [usdValue,setUsdValue] = useState(0);
    const [currentDate,setCurrentDate] = useState("--/--/----")
    const [inputOneValue,setInputOneValue] = useState(0);
    const [inputTwoValue,setInputTwoValue] = useState(0);
    const [selectOneValue,setSelectOneValue] = useState("GRN");
    const [selectTwoValue,setSelectTwoValue] = useState("USD");
    const currencies = ["USD","GRN","EUR"];

    const rates: IRates = {
        USD: usdValue,
        EUR: eurValue,
        GRN: 1
    }
    useEffect(()=> {
        const values = axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json")
            .then(resp => {
                const usd = resp.data.find( (element: { cc: string; }) => element.cc === "USD");
                const eur = resp.data.find( (element: { cc: string; }) => element.cc === "EUR");
                setUsdValue(usd.rate)
                setEurValue(eur.rate)
                setCurrentDate(usd.exchangedate);
            });

    },[])
    return (
    <div className="App">
      <Header
          eurValue={eurValue}
          usdValue={usdValue}
          currentDate={currentDate}
      />
        <CurrencyInput
            currencies={currencies}
            inputValue={inputOneValue}
            setInputValue={setInputOneValue}
            selectValue={selectOneValue}
            setSelectValue={setSelectOneValue}
            setAnotherInputValue={setInputTwoValue}
            anotherSelectValue={selectTwoValue}
            rates={rates}
        />
        <CurrencyInput
            currencies={currencies}
            inputValue={inputTwoValue}
            setInputValue={setInputTwoValue}
            selectValue={selectTwoValue}
            setSelectValue={setSelectTwoValue}
            setAnotherInputValue={setInputOneValue}
            anotherSelectValue={selectOneValue}
            rates={rates}
        />

    </div>
  );
}

export default App;
