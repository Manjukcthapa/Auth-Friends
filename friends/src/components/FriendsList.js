import React, { useState, useEffect } from "react";
import axios from "axios";
import Friend from "./Friend";
import AddFriend from "./AddFriend";
import "./friends.css";

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

  const deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/api/friends/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
      })
      .then(res => setFriends(res.data))
      .catch(err => console.log(err.response));
  };

  return (
    <div className = "friendList">
      <AddFriend setFriends={setFriends} />
      {friends.map(friend => {
        return (
          <Friend key={friend.id} friend={friend} deleteFriend={deleteFriend} />
        );
      })}
    </div>
  );
};

export default FriendsList;
