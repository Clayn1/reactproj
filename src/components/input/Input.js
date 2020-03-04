import React, {Component} from 'react';

function Input(props) {
    const {onChange} = props;
    const myChange = (event) => {
        onChange(event.target.value);
    };
    return (
        <div>
            <input onChange={myChange} type="number"/>
        </div>
    );
}

export default Input;