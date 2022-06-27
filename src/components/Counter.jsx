import {useState} from 'react';

export const Counter = () => {
    const [state, setState] = useState(0);
    return <div>
        <div>{state}</div>
        <button onClick={() => setState(state - 1)}>-</button>
        <button onClick={() => setState(state + 1)}>+</button>
    </div>;
};
