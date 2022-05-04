 export interface IRates {
    USD: number ,
    EUR: number,
    GRN: number
}

 export interface IHeader {
     eurValue : number,
     usdValue : number,
     currentDate : string
 }

export interface ICurrencyInput {
    currencies: string[],
    inputValue: number,
    setInputValue: any,
    selectValue: string,
    setSelectValue: any,
    setAnotherInputValue: any,
    anotherSelectValue: string
    rates: IRates
}