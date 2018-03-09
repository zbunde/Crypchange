import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import UserEditForm from './UserEditForm';

export default class Users extends React.Component {
  constructor(props){
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditUser = this.submitEditUser.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteUser = this.cofirmDeleteUser.bind(this);
  }

  componentWillMount(){
    this.props.fetchUsers();
  }


  showEditModal(userToEdit){
     this.props.mappedshowEditModal(userToEdit);
  }

  hideEditModal(){
     this.props.mappedhideEditModal();
  }

  hideDeleteModal(){
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(userToDelete){
    this.props.mappedshowDeleteModal(userToDelete);
  }

  cofirmDeleteUser(){
   this.props.mappedDeleteUser(this.props.mappedUserState.userToDelete);
 }

  submitEditUser(e){
    e.preventDefault();
    const editForm = document.getElementById('EditUserForm');
      const data = new FormData();
      data.append('id', editForm.id.value);
      data.append('coinName', editForm.coinName.value);
      data.append('amount', editForm.amount.value);
      this.props.mappedEditUser(data);
  }

  render(){
    const userState = this.props.mappedUserState;
    const users = userState.users;
    const editUser = userState.userToEdit;
    return(
      <div className="col-md-12">
      <h3 className="centerAlign">Users</h3>
      {!users && userState.isFetching &&
        <p>Loading users....</p>
      }
      {users && users.length > 0 && !userState.isFetching &&
      <table className="table usersTable">
      <thead>
       <tr>
       <th className="textCenter">First Name</th>
       <th className="textCenter">Last Name</th>
       <th className="textCenter">USD </th>
       <th className="textCenter">Bitcoin</th>
       <th className="textCenter">Monero</th>
       <th className="textCenter">Dogecoin</th>
       <th className="textCenter">Litecoin</th>
       <th className="textCenter">Account Value</th>
       </tr>
      </thead>
      <tbody>
        {users.map((user,i) => <tr key={i}>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.usd}</td>
        <td>{user.bitcoin}</td>
        <td>{user.monero}</td>
        <td>{user.dogecoin}</td>
        <td>{user.litecoin}</td>
        <td>$$$$$$</td>
         <td className="textCenter"><Button onClick={() => this.showEditModal(user)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="usd" /></Button></td>
         <td className="textCenter"><Button onClick={() => this.showDeleteModal(user)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>

         </tr> )
      }
      </tbody>
      </table>
    }

    <Modal
      show={userState.showEditModal}
      onHide={this.hideEditModal}
      container={this}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Purchase Coins</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <div className="col-md-12">
    {editUser  &&
    <UserEditForm userData={editUser} editUser={this.submitEditUser} />
    }
    {editUser  && userState.isFetching &&
      <Alert bsStyle="info">
  <strong>Purchasing...... </strong>
      </Alert>
    }
    {editUser  && !userState.isFetching && userState.error &&
      <Alert bsStyle="danger">
  <strong>Failed. {userState.error} </strong>
      </Alert>
    }
    {editUser  && !userState.isFetching && userState.successMsg &&
      <Alert bsStyle="success">
  Coins <strong> {editUser.first_name} </strong>{userState.successMsg}
      </Alert>
    }
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.hideEditModal}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/* Modal for deleting user */}
    <Modal
    show={userState.showDeleteModal}
    onHide={this.hideDeleteModal}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Delete User</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {userState.userToDelete && !userState.error && !userState.isFetching &&
      <Alert bsStyle="warning">
 Are you sure you want to delete this user <strong>{userState.userToDelete.userText} </strong> ?
</Alert>
    }
    {userState.userToDelete && userState.error &&
      <Alert bsStyle="warning">
 Failed. <strong>{userState.error} </strong>
</Alert>
    }

    {userState.userToDelete && !userState.error && userState.isFetching &&
      <Alert bsStyle="success">
  <strong>Deleting.... </strong>
</Alert>
    }

    {!userState.userToDelete && !userState.error && !userState.isFetching&&
      <Alert bsStyle="success">
 User <strong>{userState.successMsg} </strong>
</Alert>
    }
    </Modal.Body>
    <Modal.Footer>
     {!userState.successMsg && !userState.isFetching &&
       <div>
       <Button onClick={this.cofirmDeleteUser}>Yes</Button>
       <Button onClick={this.hideDeleteModal}>No</Button>
       </div>
    }
    {userState.successMsg && !userState.isFetching &&
      <Button onClick={this.hideDeleteModal}>Close</Button>
    }
    </Modal.Footer>
  </Modal>
      </div>
    );
  }
}
