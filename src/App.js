import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./components/count/Count";
import Button from "./components/button/Button";
import Input from "./components/input/Input";

class App extends React.Component{
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
        console.log("Prev Props: ",prevProps);
        console.log("Prev State: ",prevState);
    }
    handler = (value) => {
        this.setState({
          count: this.state.count+value >= 0 ? this.state.count+value : this.state.count
      })
    };
    reset = () => {
        this.setState({
            count : 0
        })
    };
    inputState = (value) => {
        this.setState({
            count: +value >= 0 ? +value : Math.abs(+value)
        })
    };
    // handler({id}){
    //     //const {id} = event;
    //     this.setState({
    //         count: this.state.count+id
    //     })
    // };
    render() {
        console.log("Render");
        const {b, func}  =this.props;
        const {count} = this.state;
        func();
        return(
            <div className="App">
                <h1>{b} world</h1>
                <Count count = {count}/>
                <Button myFunc={this.handler} value={1}/>
                <Button myFunc={this.handler} value={-1}/>
                <Button myFunc={this.handler} value={100}/>
                <Button myFunc={this.handler} value={-100}/>
                <Button myFunc={this.reset} label={"Reset"}/>
                <Input onChange={this.inputState}/>
            </div>
        )
    }
}

export default App;
