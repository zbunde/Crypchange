
// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import UserForm from './UserForm';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleAddUser = this.toggleAddUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  toggleAddUser(e){
    e.preventDefault();
     this.props.mappedToggleAddUser();
  }

  addUser(e){
      e.preventDefault();
      const form = document.getElementById('addUserForm');
      if(form.firstName !== ""  && form.lastName !== ""){
        const data = new FormData();
        data.append('first_name', form.first_name.value);
        data.append('last_name', form.last_name.value);

        this.props.mappedAddUser(data);
      form.reset();
      }
      else{
        return ;
      }
  }

  render(){
    const appState = this.props.mappedAppState;
    return(
      <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">Salty Exchange</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={{ pathname: '/', query: {  } }}>
           <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
      <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddUser}>
         <NavItem eventKey={1}>Add User</NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="container">
  {appState.showAddUser &&
    <UserForm addUser={this.addUser} />
  }
  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
    );
  }
}
