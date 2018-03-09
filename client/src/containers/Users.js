import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import Users from '../components/Users';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedUserState: state.userState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(userActions.fetchUsers()),
    mappedEditUser: userToEdit => dispatch(userActions.editUser(userToEdit)),
    mappedshowEditModal: userToEdit => dispatch(userActions.showEditModal(userToEdit)),
    mappedhideEditModal: () => dispatch(userActions.hideEditModal()),
    mappedDeleteUser: userToDelete => dispatch(userActions.deleteUser(userToDelete)),
    mappedshowDeleteModal: userToDelete => dispatch(userActions.showDeleteModal(userToDelete)),
    mappedhideDeleteModal: () => dispatch(userActions.hideDeleteModal())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);
