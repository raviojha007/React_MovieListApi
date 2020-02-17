import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Regiser from './Componen/Regiser';
//import Login from './Componen/Login';
import Dashboard from './Componen/Dashboard'
import MoviesList from './Componen/MoviesList'

//import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Route  exact strict path="/" component={Regiser}></Route>
       
        <Route exact strict path="/Dashboard" component={Dashboard}></Route>
        <Route  exact strict path="/MoviesList" component={MoviesList}></Route>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
