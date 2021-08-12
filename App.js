import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Login from './components/login';
import useState from 'react';
import Container from "@material-ui/core/Container";
import  TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import addCar from "./components/addCar";

class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 0 },
        {id: 2, value: 0 },
        {id: 3, value: 0 },
        {id: 4, value: 0 },
    ]
 }

 constructor(){
   super();
   console.log('App - Constructor');
 }

 componentDidMount(){
   //Ajax Call
   console.log('App - Mounted');
 };

handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({counters});
}; 

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters });
};

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id!== counterId);
    this.setState({counters});
    console.log('Event Delete Called', counterId);
};

handleAddProduct = (counterId) => {
  var counter = {
    id: this.state.counters[this.state.counters.length - 1].id + 1,
    value: 0
  };
  const counters = [...this.state.counters, counter];
  this.setState({ counters });
  
  console.log("Event Add Called", counterId);
};

  render() {
    console.log("App - Rendered");
    
    return (
      <React.Fragment>
        
        <Router>
        <NavBar 
            totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Switch>
          <Route path="/counters">
          <main className="container">
            <Counters 
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              onAddProduct={this.handleAddProduct}
            />
          </main>
          </Route>
          <Route path="/login">
           <Login/>
          </Route>
          <Route path="/addCar">
           <addCar></addCar>
          </Route>
        </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
