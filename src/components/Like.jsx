import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import axios from "axios";

function Like({ tweet, setLikeChanged, likeChanged }) {
  console.log(tweet);
  const [myUser, setMyUser] = useState();
  const store = useSelector((state) => state);
  const token = store.login;

  useEffect(() => {
    const dateUser = async () => {
      const response = await axios.get(
        `http://localhost:8000/${token.username}`,
        {
          headers: { Authorization: "Bearer " + token.token },
        }
      );
      setMyUser(response.data);
      return response;
    };
    dateUser();
  }, []);

  async function like(tweet) {
    const response = await axios.post(
      `http://localhost:8000/likeTweet/${tweet._id}`,
      {
        headers: { Authorization: "Bearer " + token.token },
      }
    );
    setLikeChanged(!likeChanged);
    return response;
  }

  return (
    <button className="bg-black" onClick={() => like()}>
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
