// import { CButton, CForm, CFormInput, BsSearch } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import "./sidebar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FollowRightSidebar from "./FollowRightSidebar";

export const RightSidebar = ({ refresh, setRefresh }) => {
  const [recommendedUser, setRecommendedUser] = useState([]);
  const store = useSelector((state) => state);
  const myUser = store.login;
  const navigate = useNavigate();
  useEffect(() => {
    const userNameProfile = async () => {
      const response = await axios.get(`http://localhost:8000/who_to_follow`, {
        headers: { Authorization: "Bearer " + myUser.token },
      });
      setRecommendedUser(response.data);
    };
    userNameProfile();
  }, [refresh]);

  return (
    <div className="col-md-4">
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" type="search" className="input" />
      </div>
      <div className="card-body pt-2">
        <div className="card-header mt-1 contentTrendsTitle">
          <h4 className="text-start ms-3 mb-4 mt-2 title">Trends for you</h4>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Trending in Uruguay</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title card2">Peñarol</h5>
          <p className="amountTwetts">34k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Trending in Uruguay</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title card2">Suarez</h5>
          <p className="amountTwetts">800k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Politics . Trending</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title card2">Cristina</h5>
          <p className="amountTwetts">57.7k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Trending in Uruguay</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title card2">Dubai</h5>
          <p className="amountTwetts">36.7k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Trending in Uruguay</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title card2">Darwin Nuñez</h5>
          <p className="amountTwetts">5.7k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Trending in Uruguay</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title card2">Pfizer</h5>
          <p className="amountTwetts">39.7k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p className="trendTitle">Sports . Trending</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title card2">Nacional</h5>
          <p className="amountTwetts">80.7k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Trending in Uruguay</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title card2">Tremendo</h5>
          <p className="amountTwetts">32.7k Tweets</p>
        </div>
      </div>

      <div className="row mt-3">
        <div>
          <div className="form-floating mb-3">
            <div className="card-body whotofollow">
              <div className="">
                <div className="d-flex">
                  <div className="card-header titleFollow">
                    <h4 className="text-start ms-3 mt-3 mt-2 mb-3 title">
                      Who to follow
                    </h4>

                    {recommendedUser.map((element, index) => {
                      return (
                        <div className="filaswhotofollow" key={index}>
                          <div className="container d-flex text-start">
                            <div className="row">
                              <div className="col-2 me-3">
                                <img
                                  className="rounded-circle avatar"
                                  src={
                                    element.image ||
                                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEWzs7P///+vr6/j4+Otra3u7u7Y2Njm5ua3t7f7+/vAwMC6urrU1NTz8/PQ0NDp6enKysrExMTc3NzfYYiMAAAEUUlEQVR4nO2dC4KqMAxFISA/QWH2v9gH4vj8ANo22NvOPSvwWJo0aQtJQgghhBBCCCGEEEIIIYQQQgghX0Uu+P4VOyLF+VxmRd9Eq1mlv3TZkEQpmd5z7uMbybxLH8mayBwlS5/pIhvI04thmtZtTDPyuGA4UkQ0jsuGaX3Kff8yHWTNcJyPEcQcyav2OZbeUwY+HSXZ1LtwClhRqtc8scAh1GGUY/mJ30QfpKL8fOo3koWnmPe1geCYOI6hOX78gN4YQlKUxmwAZwJK/9Jb+I38hKIoSwvtmBTtBceQGoKiDPaCadoGEG6q9xpb4Od+ebsMfYNvgXcYLWQWOYAPouMzOtH7dthEzu6GNfQgNu6CU/vGt8Y6GkOIPYgKs3Di5NtjFSl0DDvYlY1zLvzl6NtkjZXGrzmwazeHJfcjZ1BDMa/rV0CNpmrTME0r3y7LiJpgOvh2WUYpG06AhhpFwx9MQ7VkAdsgjt9QpbD4K4ag85CGNLwDtMynoQGgaxrFfBi/IWinJn5DxZU3aN87fsP102uxGMZf4+c2BzCCMhQ9w8a3yzKKvTZUw4OaIWZbX2Lvl0qr5jfWFhXewlRnc/Q/cKdO3M9gPIMWbBRX3VfAtkm1dn/vwYqnimH0BlYFlesLgvVq9jDE6mQoLrpvYFVQ2tlwAizSqKfDtMbKFonTweBF4Laf1A3RimC9kyZX8A6cKLb0L2DlignF8veCb58FdGMN4q1L1ZnYAQomquEUrTicsb3PtQBcLrySqwUb3yaraG3NIIaZGaVKH/nWzMtrWqzAKiqe0FjZgJ6lubLwJhpT8Bakj7jvIWKV9q84J8UDWOH7iusKHDrMzLglRewwM+OUFNHDzIxL/xs9zFyxT4r4YWbGvrUIufW7hO2hDKydik3sOhqghf0idou3AFLhf2ye04Ce0QnzeBpKHP3F+BUute9fbExu2FzE7K5tYra0wW3NbGByAAW1fbiNQaV4DizKzBh0+ZGba1t8PoQBRpkJg3QRRlX4jFHrNITK/gWzo3xBvTNxxnTtHUxleMO0HxVS5XQhNy6fAssYNn3hoBTtXp0Y0MImt+zsH3z/8I+x3n+qg3hBu+kbkh9p4Z9UaRw3Zg7Qwyh5r3AaIwO8LjMjVaF0FLpsAL97MQ6f5jnorqhyJEmRRv8QdFc0CcZQigzZDgf1LxyKIfH7ESzJq9MOh/QfqMt2SPw8suOzWexwF2iRLjsdvzuY0+CVez2bK9Tn9lsxdgos3xq8Z8uy3/tzJuOf2H978J4o+/1mpcixVT6vbkW9zy3hcep9LbC8R39pJ9vfbPJAqfnVljGp7531bMi0go5I6ze0rKOzJSdaFcMedO7TUQZgv4nW1VD/WqE2jvtWe1yz18X1BEcAho4TkYb+oSENaegfGtKQhv6hIQ1p6B8a0pCG/qEhDeM3TPoyw8b9wpug4ypICCGEEEIIIYQQQgghhBBCCPk7/AOT7UbJ5bD1AAAAAABJRU5ErkJggg=="
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-7">
                              <p
                                id="nombreusuario"
                                className="nombreusuario mb-0 mt-2"
                              >
                                <Link
                                  to={`/${element.username}`}
                                  onClick={!refresh}
                                >
                                  {element.firstname} {element.lastname}
                                </Link>
                              </p>
                              <p className="usuario">@{element.username}</p>
                            </div>
                            <div className="col-2">
                              <FollowRightSidebar
                                user={element}
                                refresh={refresh}
                                setRefresh={setRefresh}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <p id="showmore" className="showmore">
                      Show more
                    </p>
                  </div>
                </div>
              </div>
              <p className="termsofservice mt-3 text-start mt-5">
                Terms of Service Privacy Policy Cookie Policy Accessibility Ads
                info More © 2022 Equipo 5 Hack!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
