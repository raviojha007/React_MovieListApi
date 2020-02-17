import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

export class Nav extends Component {
    SignOut=()=>{
        this.props.history.push('/')
    }
    render() {
        return (
            <>

             <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
         <div className="container"> 
                <a className="navbar-brand text-warning ml-5"  href="#">Movies List</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-5 ">
                    <li className="nav-item dropdown">
                        <button  type="submit" onClick={this.SignOut} href="" class="btn btn-outline-success ">
                            <i class="fa fa-sign-out-alt text-muted"></i> SignOut</button>
                    </li>
                    </ul>
                </div>
        </div>    
                </nav>
   
 </>
        );
    }
}

export default withRouter( Nav);
