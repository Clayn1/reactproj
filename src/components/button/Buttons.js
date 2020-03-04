import React from 'react';
import Button from "./Button";

function Buttons(props) {
    const {reset, handler, value} = props;
    const myChange = (event) => {
        if (event.keyCode === 13) handler(event.target.value);
    };
    return (
        <div>
            {value.map(val => <Button value={val} myFunc={handler}/>)}
            <button onClick={reset}>Reset</button>
            <input onKeyDown={myChange} type="number"/>
        </div>
    );
}

export default Buttons;