import React, { useState, useEffect } from "react";
import axios from "axios";
import Friend from "./Friend";
import AddFriend from "./AddFriend"

const FriendsList = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/friends", {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log("error in get in Friends.js", err.res));
  }, []);

  return (
    <div>
      <AddFriend/>
      {friends.map(friend => {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
