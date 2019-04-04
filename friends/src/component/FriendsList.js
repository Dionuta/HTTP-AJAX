import React from 'react';
import Friend from './Friend'


const FriendsList = ({friends}) =>{
    return(
      <div>
       {friends.map(friend => (
        <Friend
          {...friend}
          key ={friend.id}
        />
      ))}
       </div>
   )
    
}

export default FriendsList;