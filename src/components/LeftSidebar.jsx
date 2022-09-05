import "bootstrap/dist/css/bootstrap.min.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../LeftSidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TweetModal } from "./TweetModal";
import { useEffect, useState } from "react";
import axios from "axios";
import { PURGE } from "redux-persist";
import LogoutModal from "./LogoutModal";

export const LeftSidebar = ({ refresh, setRefresh }) => {
  const [infoUser, setInfoUser] = useState([]);
  const store = useSelector((state) => state);
  const myUser = store.login;
  const navigate = useNavigate();

  function logout() {
    myUser.token = null;
    navigate("/");
  }

  useEffect(() => {
    const userNameProfile = async () => {
      const response = await axios.get(
        `http://localhost:8000/${myUser.username}`,
        {
          headers: { Authorization: "Bearer " + myUser.token },
        }
      );
      setInfoUser(response.data);
    };
    userNameProfile();
  }, []);
  return (
    <div className="col-md-4 left-sidebar-final">
      <div className="row text-start justify-content-end leftsidebar">
        <div className="col-lg-8">
          <button className="btn btn-dark text-light text-start rounded-pill mb-1 btn-lg col-md-7 mt-1">
            <Link to="/home">
              <TwitterIcon className="fs-2" />
            </Link>
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg fw-bold mt-1">
            <Link to="/home">
              <HomeRoundedIcon className="me-3 fs-2" />
              Home{" "}
            </Link>
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <TagIcon className="me-3 fs-2" />
            <Link to={"/error"}>Explore</Link>
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <NotificationsNoneIcon className="me-3 fs-2" />
            <Link to={"/error"}> Notifications</Link>
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <MailOutlineOutlinedIcon className="me-3 fs-2" />
            <Link to={"/error"}>Messages</Link>
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <BookmarkBorderOutlinedIcon className="me-3 fs-2" />
            <Link to={"/error"}>Bookmark</Link>
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <FeaturedPlayListOutlinedIcon className="me-3 fs-2" />
            <Link to={"/error"}>Lists</Link>
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <Person2OutlinedIcon className="me-3 fs-2" />
            <Link to={"/" + myUser.username}>Profile</Link>
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <PendingOutlinedIcon className="me-3 fs-2" />
            <Link to={"/error"}>More</Link>
          </button>
          <TweetModal refresh={refresh} setRefresh={setRefresh} />
          <LogoutModal infoUser={infoUser} />
        </div>
      </div>
    </div>
  );
};
