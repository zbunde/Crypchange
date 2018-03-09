// ./react-redux-client/src/components/UserForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const UserForm = (props) => {
  return (
    <form className="form form-horizontal" id="addUserForm" onSubmit={props.addUser}>
    <div className="row">
    <h3 className="centerAlign">Add Your User</h3>
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>First Name </ControlLabel>
            <FormControl
              type="text" placeholder="First Name"
              name="first_name"
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Last Name </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Last Name"
                  name="last_name"
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
          </FormGroup>
    </form>
  );
}

export default UserForm;
