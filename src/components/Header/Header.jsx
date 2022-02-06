import React from 'react';
import { useSelector } from 'react-redux';
import './Header.scss';

const Header = () => {
  const { ratesAll } = useSelector((state) => state.reducerGetCurrency);
  const today = new Date().toISOString().slice(0, 10);

  return (
    <header className="header">
      <div className="header_tittle">date: {today}</div>
      <div className="header_block">
        <div className="header_item">GRN/EUR:{ratesAll.EUR}</div>
        <div className="header_item">GRN/USD:{ratesAll.USD}</div>
        <div className="header_item">GRN/RUB:{ratesAll.RUB}</div>
      </div>
    </header>
  );
};

export default Header;
