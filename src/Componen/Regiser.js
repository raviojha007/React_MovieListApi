import React, { Component } from 'react';
import '../App.css';
//import { withRouter } from "react-router-dom";
//import axios  from 'axios';
//import {validation} from '../utility/utility'
import { Button, Form, FormGroup, Label, Input, Row,Col } from 'reactstrap';
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  console.log(rest)
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

export  class Regiser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  
    if (formValid(this.state)) {
    
        this.props.history.push('/Dashboard')
       }
     else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

    
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 5 ? "minimum 5 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <>
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">User Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
        
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">LogIn</button>
              
            </div>
          </form>
        </div>
        
      </div>
       <footer class="p-3 bg-teal text-white text-center bg-success">
       <div class="container">
           <div class="row align-items-center">
               <div class="col-md-9">
                   <h3>Copyright © 2020</h3>
                   <h6>All Rights Reserved</h6>
                   <h6>Developed & Maintained by Ravi Kumar Ojha
                       <a class="text-warning" href="https://github.com/raviojha007" target="_blank">
                          
                       </a>
                   </h6>
               </div>
           </div>
       </div>
   </footer>
   </>
    );
  }
}
  

export default Regiser ;
