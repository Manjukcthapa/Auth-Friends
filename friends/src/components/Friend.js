import React from "react";
import "./friends.css";

const Friend = ({friend, deleteFriend}) => {
  return(
    <div className='friends'>
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
      <button onClick={() => deleteFriend(friend.id)}>Delete</button>
    </div>
  )
  
};

export default Friend;
