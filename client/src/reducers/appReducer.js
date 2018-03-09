const INITIAL_STATE = {
  showAddUser: false
}

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_User':
          return {
            ...currentState,showAddUser: !currentState.showAddUser
          }


    default:
       return currentState;

  }
}

export default appReducer;
