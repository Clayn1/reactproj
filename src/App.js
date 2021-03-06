import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./components/count/Count";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import Buttons from "./components/button/Buttons";
import HookCounter from "./HookCounter";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor:");
        console.log(props);
        this.state = {
            count: 0,
            data: null
        };
        //this.handler = this.handler.bind(this);
    }

    componentDidMount() {
        console.log("Mount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Prev Props: ", prevProps);
        console.log("Prev State: ", prevState);
    }

    handler = (value) => {
        this.setState({
            count: this.state.count + parseInt(value) >= 0 ?
                this.state.count + parseInt(value) :
                this.state.count
        })
    };
    reset = () => {
        this.setState({
            count: 0
        })
    };
    // inputState = (value) => {
    //     this.setState({
    //         count: this.state.count+value >= 0 ? this.state.count+value : this.state.count
    //     })
    // };
    // handler({id}){
    //     //const {id} = event;
    //     this.setState({
    //         count: this.state.count+id
    //     })
    // };
    render() {
        console.log("Render");
        const {b, func} = this.props;
        const {count} = this.state;
        func();
        return (
            <div className="App">
                <h1>{b} world</h1>
                <Count count={count}/>
                {/*<Button myFunc={this.handler} value={1}/>*/}
                {/*<Button myFunc={this.handler} value={-1}/>*/}
                {/*<Button myFunc={this.handler} value={100}/>*/}
                {/*<Button myFunc={this.handler} value={-100}/>*/}
                {/*<Button myFunc={this.reset} label={"Reset"}/>*/}
                {/*<Input onChange={this.inputState}/>*/}
                <Buttons reset = {this.reset} handler = {this.handler} value = {[1,-1,100,-100]}/>
                <HookCounter/>
            </div>
        )
    }
}

export default App;
