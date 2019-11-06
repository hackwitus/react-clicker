import React, { useState } from 'react';

const Clicker = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button>-</button>
      {value}
      <button>+</button>
    </div>
  );
};

export default Clicker;
