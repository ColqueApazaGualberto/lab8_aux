import React, { useState } from 'react';

const Button: React.FC = () => {
  const [value, setValue] = useState<number>(5);

  const handleClick = () => {
    // Sumar 50 al valor actual
    setValue(prevValue => prevValue + 50);
  };

  return (
    <button onClick={handleClick}>{value}</button>
  );
}

export default Button;
