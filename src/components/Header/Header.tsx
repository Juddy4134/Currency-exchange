import React from 'react';
import {IHeader} from "../../interfaces/Interfaces";
import "./Header.css"

const Header = (props:IHeader) => {
    return(
        <div>
            <h1>Курс валют НБУ на {props.currentDate} </h1>
            <div className={"currencies"}>
                <p>EUR = {props.eurValue}</p>
                <p>USD = {props.usdValue}</p>
            </div>
    </div>
    );
};

export default Header;