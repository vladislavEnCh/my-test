import React from 'react';

const InputRow = ({
  valueInput,
  onChangeInput,
  onChangeSelect,
  valueSelect,
  selectItems,
}) => {
  return (
    <div className="main_row">
      <input
        type="number"
        className="input"
        value={valueInput}
        onChange={onChangeInput}
      />
      <select value={valueSelect} onChange={onChangeSelect}>
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
  );
};

export default InputRow;
