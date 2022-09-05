import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./sidebar.css";

function FollowRightSidebar({ user, refresh, setRefresh }) {
  const [myUser, setMyUser] = useState(null);
  const store = useSelector((state) => state);
  const login = store.login;
  useEffect(() => {
    const dataUser = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/${login.username}`,
        headers: {
          Authorization: `Bearer ${login.token}`,
          "Content-Type": "application/json",
        },
      });
      setMyUser(response.data);
      return response;
    };
    dataUser();
  }, [refresh]);

  async function follow() {
    const response = await axios({
      method: "post",
      url: `http://localhost:8000/follow/${user?._id}`,
      headers: {
        Authorization: `Bearer ${login.token}`,
        "Content-Type": "application/json",
      },
    });
    setRefresh(!refresh);
    return response;
  }

  return (
    <button className="buttonFollow" onClick={() => follow()}>
      {!myUser?.following.includes(user?._id) ? (
        <span className="ms-1">Follow</span>
      ) : (
        <span className="ms-1">Unfollow</span>
      )}
    </button>
  );
}

export default FollowRightSidebar;
