import React, {useState} from 'react';

function HookCounter(props) {
    const [count, changeCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>changeCount(count+1)}>{'+1'}</button>
            <button onClick={()=>count-1 >= 0 ? changeCount(count-1):count}>{'-1'}</button>
        </>
    );
}

export default HookCounter;