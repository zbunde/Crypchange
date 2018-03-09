import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import User from '../components/User';

const mapStateToProps = (state) => {
  return {
    mappedUserState: state.userState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedfetchUserById: userId => dispatch(userActions.fetchUserById(userId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(User);
