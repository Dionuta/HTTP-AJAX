import React from 'react';
import Friend from './Friend'


const FriendsList = ({friends, updateFriends, history}) =>{
    return(
      <div>
       {friends.map(friend => (
        <Friend
          {...friend}
          updateFriends={updateFriends}
          history={history}
          key ={friend.id}
        />
      ))}
       </div>
   )
    
}

export default FriendsList;