import { useCounterPlusOne, useCounterMinusOne } from './redux/hooks';

export default function Counter() {
  const { count, counterPlusOne } = useCounterPlusOne();
  const { counterMinusOne } = useCounterMinusOne();

  return (
    <div className='home-counter'>
      <div className='count'>计数：{count}</div>
      <button className='plus-one' onClick={counterPlusOne}>+</button>
      <button className='minus-one' onClick={counterMinusOne}>-</button>
    </div>
  );
}
