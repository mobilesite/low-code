import { useCounterPlusOne, useCounterMinusOne } from './redux/hooks';

export default function Counter() {
  const { count, counterPlusOne } = useCounterPlusOne();
  const { counterMinusOne } = useCounterMinusOne();

  return (
    <div>
      <div>{count}</div>
      <button onClick={counterPlusOne}>+</button>
      <button onClick={counterMinusOne}>-</button>
    </div>
  );
}
