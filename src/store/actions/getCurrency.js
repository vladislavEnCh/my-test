import axios from "axios";
import { actionGetCurrency } from "../reducer/reducerGetCurrency";
// fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11").then(re => console.log('pr'+re.json()))
// axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=9f3f5cc1924599a30ffe2f32dc09a7fe').then(resp => console.log('ef'+ resp.data))
// axios.get("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid").then(resp => console.log('pri'+ resp))

const URL_PRIVAT = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11" 
const URL_ALLCARR = 'http://api.exchangeratesapi.io/v1/latest?access_key=9f3f5cc1924599a30ffe2f32dc09a7fe'
const URL_RU = 'https://www.cbr-xml-daily.ru/daily_json.js'
export const getCurrency = () =>{
    return async (dispatch) =>{
        axios.get(URL_RU) .then((resp) => dispatch(actionGetCurrency(resp.data)));
    }
}

// export const getRateCurrency = () =>{
//     return async (dispatch) =>{
//         axios.get(URL_ALLCARR) .then((resp) => dispatch(actionGetCurrency(resp.data)));
//     }
// }