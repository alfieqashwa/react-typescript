import React, { useState } from 'react';

interface Props {
  title: string;
  count: number;
}

const Counter: React.FC<Props> = ({ title }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
        <h1>TypeScript {title}</h1>{' '}
        <h2>{count}</h2>
      <button type="button" onClick={() => setCount(count - 1)}>-</button>{' '}
      <button type="button" disabled={count === 0} onClick={() => setCount(count * 0)}>Reset</button>{' '}
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
};

export default Counter;