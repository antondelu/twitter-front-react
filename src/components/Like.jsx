import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import axios from "axios";

function Like({ tweet, setLikeChanged, likeChanged }) {
  const [user, setUser] = useState(null);
  const store = useSelector((state) => state);
  const myUser = store.login;
  useEffect(() => {
    const dataUser = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/${myUser.username}`,
        headers: {
          Authorization: `Bearer ${myUser.token}`,
          "Content-Type": "application/json",
        },
      });
      setUser(response.data);
      return response;
    };
    dataUser();
  }, []);

  async function like() {
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
    <button className="bg-black" onClick={() => like()}>
      {tweet.likes.includes(user?._id) ? (
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
