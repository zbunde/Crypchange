const INITIAL_STATE = {
  users:[],
  user:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  userToDelete: null,
  showEditModal: false,
  userToEdit: null,
  newUser: null
}

export  const userReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
          return {
            ...currentState,
            users:[],
            user:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            userToDelete: null,
            showEditModal: false,
            userToEdit: null,
          }

    case 'FETCH_USERS_SUCCESS':
          return {
            ...currentState,
            users:action.users,
            user:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            userToDelete: null,
            showEditModal: false,
            userToEdit: null,
          }

    case 'FETCH_USERS_FAILED':
          return {
            ...currentState,
            users:[],
            user:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            userToDelete: null,
            showEditModal: false,
            userToEdit: null,
          }

    case 'ADD_NEW_USER_REQUEST':
          return {
            ...currentState,
            users:currentState.users,
            user:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            userToDelete: null,
            showEditModal: false,
            userToEdit: null,
            newUser: action.user
          }

    case 'ADD_NEW_USER_REQUEST_FAILED':
          return {
            ...currentState,
            users:currentState.users,
            user:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            userToDelete: null,
            showEditModal: false,
            userToEdit: null,
            newUser: null
          }

    case 'ADD_NEW_USER_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            users:[...currentState.users, action.user],
            user:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            userToDelete: null,
            showEditModal: false,
            userToEdit: null,
            newUser: action.user
          }
        return nextState;

  case 'SHOW_EDIT_MODAL':
        return {
          ...currentState,
          users:currentState.users,
          user:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          userToDelete: null,
          showEditModal: true,
          userToEdit: action.user,
          newUser: null
        }

  case 'HIDE_EDIT_MODAL':
        return {
          ...currentState,
          users:currentState.users,
          user:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          userToDelete: null,
          showEditModal: false,
          userToEdit: null,
          newUser: null
        }

    case 'EDIT_USER_REQUEST':
          return {
            ...currentState,
            users:currentState.users,
            user:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            userToDelete: null,
            showEditModal: true,
            userToEdit: action.user,
            newUser: null
          }

    case 'EDIT_USER_SUCCESS':
         const updatedUsers = currentState.users.map((user) => {
           return { ...user, ...action.user }
         })
          return {
            ...currentState,
            users:updatedUsers,
            user:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            userToDelete: null,
            showEditModal: false,
            userToEdit: action.user,
            newUser: null
          }

  case 'DELETE_USER_REQUEST':
        return {
          ...currentState,
          users:currentState.users,
          user:null,
          isFetching: true,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          userToDelete: action.user,
          showEditModal: false,
          userToEdit: null,
          newUser: null
        }

  case 'DELETE_USER_SUCCESS':
  const filteredUsers = currentState.users.filter((user) => user._id !== currentState.userToDelete._id)
        return {
          ...currentState,
          users:filteredUsers,
          user:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          userToDelete: null,
          showEditModal: false,
          userToEdit: null,
          newUser: null
        }

  case 'SHOW_DELETE_MODAL':
        return {
          ...currentState,
          users:currentState.users,
          user:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          userToDelete: action.user,
          showEditModal: false,
          userToEdit: null,
          newUser: null
        }

  case 'HIDE_DELETE_MODAL':
        return {
          ...currentState,
          users:currentState.users,
          user:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          userToDelete: null,
          showEditModal: false,
          userToEdit: null,
          newUser: null
        }


    default:
       return currentState;

  }
}
