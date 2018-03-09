import React from 'react';

export default class User extends React.Component {
  componentDidMount(){
    this.props.mappedfetchUserById(this.props.params.id);
  }

  render(){
    const userState = this.props.mappedUserState;
    return(
      <div className="userDetail">
       <h2>User Detail</h2>
         {!userState.user && userState.isFetching &&
           <div>
             <p>Loading user....</p>
           </div>
         }
       {userState.user && !userState.isFetching &&
         <div>
           <h3>{userState.user.first_name}</h3>
           <p>{userState.user.last_name}</p>
         </div>
       }
      </div>
    );
  }
}
