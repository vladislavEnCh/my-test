

const GET_CURRENCY='GET_CURRENCY'

const initialState ={
    isLoading: false,
    rates:{},
    ratesAll :{},
   

}
 const reducerGetCurrency = (state = initialState, action) =>{
    switch (action.type){
        case GET_CURRENCY:
               const rateCurr={
                    UAH:action.payload.Valute.UAH,
                    USD:action.payload.Valute.USD,
                    EUR:action.payload.Valute.EUR,
                }
                let rateRUB, rateEUR, rateUSD, rateUAH;
                rateUAH = rateCurr.UAH.Value
                rateRUB = (rateCurr.UAH.Value / rateCurr.EUR.Value).toFixed(1);
                rateEUR = (rateRUB * rateCurr.EUR.Value).toFixed(1);
                rateUSD = (rateRUB * rateCurr.USD.Value).toFixed(1);
                let ratesAll = {
                    UAH:1,
                    USD:rateUSD,
                    EUR:rateEUR,
                    RUB:rateRUB
                    
                }

            return {
                ...state,
                   rates:rateCurr,
                   ratesAll:ratesAll,
                  

            }
        default: 
        return state
    }
}


export const actionGetCurrency =(items) =>({
    type:GET_CURRENCY,
    payload:items,
})

export default reducerGetCurrency