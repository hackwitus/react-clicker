import React, { useState } from 'react';
import Value from './Value';

const Clicker = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <Value value={value} />
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Clicker;
