import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row,Col } from 'reactstrap';

export class Logout extends Component {
    constructor(props){
        super(props);
        this.state={
          Username:'',
          Email:'',
          Password:''
         
        }
        console.log(this.props);
      }
       
 onChange=(e)=>{
  const name=e.target.name;
   const value=e.target.value;
    
  this.setState({
    [name]:value
    })
  }

  handleChange=(e)=>{
    e.preventDefault();
  
   
   
    this.ClearFiled();
    }

ClearFiled=()=>{
  this.setState({
   Username:'',
   Email:'',
   Password:''

           
       })
   } 
    render() {
        return (
            <div>
            <Form  onSubmit={this.handleChange}>
            <div className="input">
                <Row>
               <Col>
               <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2 ">Email</Label>
              <i style={{padding:"10px"}}className="fas fa-envelope fa-2x"></i><Input  type="email" name="Email" id="exampleEmail" value={this.state.Email} placeholder="Email" 
              onChange={this.onChange}/>
             </FormGroup>
               </Col> 
            
               </Row>
            </div>
            
          <div className="input">
          <Row>
               <Col>
               <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">Password</Label>
            <i  style={{padding:"10px"}}className="fas fa-key fa-2x"></i><Input type="Password" name="Password" id="examplePassword" value={this.state.Password} placeholder="Password" 
            onChange={this.onChange}/>
          </FormGroup>
               </Col> 
            
            </Row>
          </div>
           
         
         <Row>
           <Col ms={5}>
           <Button  className="mt-2 mr-sm-2 mb-sm-0">Register</Button>
            </Col>  
         </Row>
          
        </Form>
                </div>  
        
        )
    }
}

export default Logout;
