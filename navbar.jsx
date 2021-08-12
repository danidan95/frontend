import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
// Stateless Functional Component 

class NavBar extends Component {
    constructor(props){
        super();
        this.goToLogin = this.goToLogin.bind(this);
        this.goToCounters = this.goToCounters.bind(this);
        this.goToAddCarPage = this.goToAddCarPage.bind(this);
    }
    goToLogin(){
        console.log("Login button pushed");
        this.props.history.push("/login");
        
    }
    goToAddCarPage(){
        this.props.history.push("/addCar");
    }
    goToCounters(){
        console.log("Counters page accesed");
        this.props.history.push("/counters");
        
    }
    render() { 
        console.log('NavBar - Rendered');
        
        return ( 
            <nav className="navbar navbar-dark bg-info ">  
                
                <a className="btn navbar-brand row justify-content col"  
                    onClick={this.goToCounters}>
                    Home 
                </a>
                
                <form class="d-flex">
                    <button 
                        onClick={this.goToLogin}
                        className="btn btn-secondary btn-sm col col-md-auto " >
                            Login  
                    </button>
                    <button 
                        onClick={this.goToAddCarPage}
                        className="btn btn-secondary btn-sm col col-md-auto " >
                            Add car  
                    </button>
                </form>
                
                <span className="badge badge-pill badge-info m-2 col-lg-2">
                    {this.props.totalCounters} Products in Cart
                </span>

            </nav>
        );
    }
}

export default withRouter(NavBar);