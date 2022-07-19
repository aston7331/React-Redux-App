import React from 'react';
import { useState } from "react"

function Counter1() {

    const [count, setCount] = useState(0)
    return (
        <div>
            <button className='button' aria-label='Increment valu' onClick={() => { setCount(count + 1) }}> + </button>

            <span className='value'>Count: {count}</span>

            <button className='button' aria-label='Increment valu' onClick={() => { setCount(count - 1) }}> - </button>
        </div>
    );
}

export default Counter1;