import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice'

function Counter() {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <button className='button' aria-label='Increment valu' onClick={() => { dispatch(increment()) }}> + </button>

            <span className='value'>Count: {count}</span>

            <button className='button' aria-label='Increment valu' onClick={() => { dispatch(decrement()) }}> - </button>
        </div>
    );
}

export default Counter;