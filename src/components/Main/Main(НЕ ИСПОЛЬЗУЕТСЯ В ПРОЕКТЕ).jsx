import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCurrency } from '../../store/actions/getCurrency';
import InputRow from '../InputRow/InputRow';

import './Main.scss';

const Main = () => {
  const dispatch = useDispatch();
  const { rates, ratesAll } = useSelector((state) => state.reducerGetCurrency);
  const [currentValue, setCurrentValue] = useState();
  const [currentSelectBelow, setCurrentSelectBelow] = useState(27);
  //   ===========================================Select
  const [fromThisCurr, setFromThisCurr] = useState();
  const [toThisCurr, setToThisCurr] = useState();
  //   =======================================
  const [rateOne, setRateOne] = useState();
  const [rateTwo, setRateTwo] = useState();

  //   ===================================Input
  const [inputAboveCurrency, setInputAboveCurrency] = useState(1);
  const [inputBelowCurrency, setInputBelowCurrency] = useState();

  let selectItems;
  if (ratesAll) {
    selectItems = Object.keys(ratesAll);
  }
  useEffect(() => {
    dispatch(getCurrency());
  }, []);

  useEffect(() => {
    setInputBelowCurrency(1 / ratesAll['USD']);
    setRateOne(ratesAll['USD']);
  }, [ratesAll]);

  useEffect(() => {
    setRateOne(ratesAll[toThisCurr]);
    setInputAboveCurrency(1);
    setInputBelowCurrency(1 / ratesAll[toThisCurr]);
  }, [toThisCurr]);
  //   ===========================================
  //   useEffect(() => {
  //     if (fromThisCurr !== null && toThisCurr !== null)
  //       fetch(`${URL_ALLCARR}&base=${fromThisCurr}&symbols=${toThisCurr}`)
  //         .then((res) => res.json())
  //         .then((res) => setRate(res.rates[toThisCurr]));
  //   }, [fromThisCurr, toThisCurr]);
  const handlerSelectAbove = (e) => {
    setFromThisCurr(e.target.value);
  };
  const handlerSelectBelow = (e) => {
    setToThisCurr(e.target.value);
  };
  //   ===================================
  const handlerInputAbove = (e) => {
    setInputAboveCurrency(parseInt(e.target.value));
    setInputBelowCurrency(e.target.value * rateTwo);
  };
  //   console.log(rateOne);
  const handlerInputBelow = (e) => {
    setInputBelowCurrency(e.target.value);
    setInputAboveCurrency(e.target.value * rateOne);
  };

  return (
    <div className="main">
      <div className="main_table">
        <div className="main_content">
          <h1>Convert</h1>
          <div className="main_row">
            <input
              type="number"
              className="input"
              value={inputAboveCurrency}
              onChange={handlerInputAbove}
            />
            <span className="main_add">UAH</span>
            {/* <select value={'UAH'}>
              <option>{'UAH'}</option>
            </select> */}
          </div>
          {/* <InputRow
            selectItems={selectItems}
            valueInput={inputAboveCurrency}
            valueSelect={fromThisCurr}
            onChangeInput={handlerInputAbove}
            onChangeSelect={handlerSelectAbove}
          /> */}
          <div className="equals">=</div>
          <InputRow
            selectItems={selectItems}
            valueInput={inputBelowCurrency}
            valueSelect={toThisCurr}
            onChangeInput={handlerInputBelow}
            onChangeSelect={handlerSelectBelow}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
