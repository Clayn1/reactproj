import React, {Component} from 'react';

function Button({myFunc, value, label}) {
    const myHandler = () => {
        myFunc(value);
    };

    return (
        <div>
            <button onClick={myHandler}>{label||value}</button>
        </div>
    );
}

export default Button;