import React from 'react';
import {useState} from 'react';

export const Counter = () => {
    const [state, setState] = useState<number>(0);
    return <div>
        <div>{state}</div>
        <button onClick={() => setState(state - 1)}>-</button>
        <button onClick={() => setState(state + 1)}>+</button>
    </div>;
};
