import React from "react";

const Friend = ({friend, deleteFriend}) => {
  return(
    <div>
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
      <button onClick={() => deleteFriend(friend.id)}>Delete</button>
    </div>
  )
  
};

export default Friend;
