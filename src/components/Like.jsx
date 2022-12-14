import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import axios from "axios";

function Like({ tweet, setRefresh, refresh }) {
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
    setRefresh(!refresh);
    return response;
  }

  return (
    <div className="" onClick={() => like()}>
      {tweet.likes.includes(user?._id) ? (
        <span style={{ color: "#fa167f" }} className="d-flex">
          <FavoriteIcon /> <p className="ms-2">{tweet.likes.length}</p>
        </span>
      ) : (
        <span style={{ color: "#838283" }} className="d-flex">
          <FavoriteIcon /> <p className="ms-2">{tweet.likes.length}</p>
        </span>
      )}
    </div>
  );
}

export default Like;
