import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import axios from "axios";

function Like({ tweet, setLikeChanged, likeChanged }) {
  const store = useSelector((state) => state);
  const myUser = store.login;

  async function like(tweet) {
    const response = await axios({
      method: "post",
      url: `http://localhost:8000/likeTweet/${tweet._id}`,
      headers: {
        Authorization: `Bearer ${myUser.token}`,
        "Content-Type": "application/json",
      },
    });
    setLikeChanged(!likeChanged);
    return response;
  }
  return (
    <button className="bg-black" onClick={() => like(tweet)}>
      {tweet.likes.includes(myUser._id) ? (
        <span style={{ color: "#fa167f" }}>
          <FavoriteIcon /> {tweet.likes.length}
        </span>
      ) : (
        <span style={{ color: "white" }}>
          <FavoriteIcon /> {tweet.likes.length}
        </span>
      )}
    </button>
  );
}

export default Like;
