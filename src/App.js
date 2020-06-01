import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }
 

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  };


 
  render() {
    //To shortten the code base with arr...to be continue
    let arr = [7,8, 9,'/']
    let arr1 =[4,5,6,'*']
    let arr2 =[1,2,3,'+']
    let arr3 = ['.',0,'-']



    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
       
    {arr.map(arr =><Button handleClick={this.addToInput}>{arr}</Button>)} 
          
          </div>
          <div className="row">
          {arr1.map(arr1 =><Button handleClick={this.addToInput}>{arr1}</Button>)} 
          </div>
          <div className="row">
          {arr2.map(arr2 =><Button handleClick={this.addToInput}>{arr2}</Button>)} 
          </div>
          <div className="row">
          {arr3.map(arr3 =><Button handleClick={this.addToInput}>{arr3}</Button>)} 
            <Button handleClick={() => this.handleEqual()}>=</Button>
          
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;