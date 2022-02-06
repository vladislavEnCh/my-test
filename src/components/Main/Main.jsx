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

  //   ===========================================Select
  const [fromThisCurr, setFromThisCurr] = useState();
  const [toThisCurr, setToThisCurr] = useState();
  //   =======================================
  const [rateOne, setRateOne] = useState();
  const [rateTwo, setRateTwo] = useState();
  console.log(rateOne);
  console.log(rateTwo);

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
    setInputBelowCurrency((1 / ratesAll['UAH']).toFixed(2));
    setRateOne(ratesAll['UAH']);
    setRateTwo(ratesAll['UAH']);
  }, [ratesAll]);

  useEffect(() => {
    setRateOne(ratesAll[toThisCurr]);
    setInputAboveCurrency(1);
    setInputBelowCurrency(((1 / ratesAll[toThisCurr]) * rateTwo).toFixed(2));
  }, [toThisCurr]);
  useEffect(() => {
    setInputAboveCurrency(1);
    console.log(ratesAll[fromThisCurr]);
    console.log(rateOne);
    setRateTwo(ratesAll[fromThisCurr]);
    setInputBelowCurrency((1 / ratesAll[fromThisCurr]) * rateOne);
  }, [fromThisCurr]);
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
    setInputAboveCurrency(e.target.value);
    setInputBelowCurrency((e.target.value / rateOne).toFixed(2));
  };
  //   console.log(rateOne);
  const handlerInputBelow = (e) => {
    setInputBelowCurrency(e.target.value);
    setInputAboveCurrency((e.target.value * rateOne).toFixed(2));
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
            <select value={fromThisCurr} onChange={handlerSelectAbove}>
              {/* <option>UAH</option> */}
              {selectItems &&
                selectItems.map((item, index) => {
                  return (
                    <option key={`${item}_${index}`} value={item}>
                      {item}
                    </option>
                  );
                })}
            </select>
          </div>
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
