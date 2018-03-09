import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/App';
import * as userActions from '../actions/userActions';

const mapStateToProps = (state) => {
  return {
    mappedAppState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedToggleAddUser: () => dispatch(appActions.toggleAddUser()),
    mappedAddUser: user => dispatch(userActions.addNewUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
