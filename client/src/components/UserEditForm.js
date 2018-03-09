import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const UserEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditUserForm" onSubmit={props.editUser}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
      <h1>{props.userData.first_name +' '+ props.userData.last_name} </h1>
      <input type="hidden" value={props.userData._id} name="id"/>
      <ControlLabel>Select</ControlLabel>
    <FormControl componentClass="select" name="coinName">
      <option value="bitcoin">bitcoin</option>
      <option value="monero">monero</option>
      <option value="dogecoin">dogecoin</option>
      <option value="litecoin">litecoin</option>
      <option value="monero">monero</option>
    </FormControl>
      </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Amount: </ControlLabel>
                <FormControl
                  type="text" placeholder="Enter Amount"
                  name="amount" defaultValue= '0'
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Purchase</Button>
          </FormGroup>
    </form>
  );
}

export default UserEditForm;
