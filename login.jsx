import React, { Component } from 'react';
import "./login.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";

class Login extends Component {

    
    render() { 
        return (
            <React.Fragment>
                <form action = "http://localhost:55495/Users/Login"  encType="multipart/form-data" method= "post">
            <div class="form-floating btn-sm m-3 d-grid gap-2 col-6 mx-auto">
                <input  name="username" class="form-control" id="floatingUsername" placeholder="name@example.com"></input> 
                <label for="floatingUsername">Email address</label>
            </div>
            
            <div class="form-floating btn-sm m-3 d-grid gap-2 col-6 mx-auto">
                <input type="password" name="password" class="form-control" id="floatingPassword" placeholder="Password"></input> 
                <label for="floatingPassword">Password</label>   
            </div>

            <button id="submitButton"
                    type = "submit"
                    className="btn btn-outline-succes btn-lg m-2 d-grid gap-2 d-md-flex justify-content-md-end"
                >Submit
            </button> <br/>
            </form>
            </React.Fragment>
        );
    }
}
 
export default withRouter(Login);