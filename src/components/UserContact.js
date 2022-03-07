import React, { useState } from "react";
import { addUserAction } from "../actions/actions";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import "../Edit/App.css"
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";


const UserContact = (props) => {
    const [name, setName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      let newUser = {
        id: uuid(),
        name: name,
        email: phonenumber,
        gen: location,
      };
  
      props.addUser(newUser);
    };
  
    return (
      <div className="d-flex justify-content-center" > 
      <Form className="rounded p-4 p-sm-6" onSubmit={handleSubmit} >
        <FormGroup className="mb-3" controlId="formBasicName">
          <h1>USER CONTACT</h1>
        <FormLabel>Name</FormLabel>
        <FormControl type="text"
         placeholder="Name"  onSubmit={handleSubmit}
         value={name}
         onChange={(e) => setName(e.target.value)} />
          </FormGroup>
        
          <FormGroup className="mb-3" controlId="formBasicEmail">
        <FormLabel>Phone Number</FormLabel>
        <FormControl type="number"
         placeholder="Enter Number"  onSubmit={handleSubmit}
         value={phonenumber}
         onChange={(e) => setPhoneNumber(e.target.value)} />
          </FormGroup>
          <FormGroup className="mb-3" controlId="formBasicEmail">
        <FormLabel>Location</FormLabel>
        <FormControl type=""
         placeholder="Location"  onSubmit={handleSubmit}
         value={location}
         onChange={(e) => setLocation(e.target.value)} />
          </FormGroup>
          <button type="submit" class="w-100 mt-2 btn btn-primary">Submit</button>
        </Form>
        </div>
      
    );
  };
  
  const sendActionAsProps = {
    addUser: addUserAction,
  };
  
  export default connect(null, sendActionAsProps)(UserContact);
  
