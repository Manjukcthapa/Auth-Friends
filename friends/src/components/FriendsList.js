import React from "react";

import Friends from "./Friends";

const FriendsList = props => {
  const [friends, setFriends] = userState([]);

  return (
    <div>
      {friends.map(friend => {
        <Friends key={friend.id} friends={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
