import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Popup from "reactjs-popup";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../LogoutModal.css";
import { ModalTwitterLogout } from "./ModalTwitterLogout";

function LogoutModal({ infoUser }) {
  const store = useSelector((state) => state);
  const myUser = store.login;
  const navigate = useNavigate();
  function logout() {
    myUser.token = null;
    navigate("/");
  }

  return (
    <Popup
      trigger={(open) => (
        <button className="btn btn-dark text-white rounded-pill btn-hover boton-user-final">
          <div className="container d-flex text-start">
            <div className="row">
              <div className="col-2 me-3 div-avatar">
                <img
                  className="rounded-circle mt-1 avatar"
                  src={
                    infoUser.image ||
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEWzs7P///+vr6/j4+Otra3u7u7Y2Njm5ua3t7f7+/vAwMC6urrU1NTz8/PQ0NDp6enKysrExMTc3NzfYYiMAAAEUUlEQVR4nO2dC4KqMAxFISA/QWH2v9gH4vj8ANo22NvOPSvwWJo0aQtJQgghhBBCCCGEEEIIIYQQQgghX0Uu+P4VOyLF+VxmRd9Eq1mlv3TZkEQpmd5z7uMbybxLH8mayBwlS5/pIhvI04thmtZtTDPyuGA4UkQ0jsuGaX3Kff8yHWTNcJyPEcQcyav2OZbeUwY+HSXZ1LtwClhRqtc8scAh1GGUY/mJ30QfpKL8fOo3koWnmPe1geCYOI6hOX78gN4YQlKUxmwAZwJK/9Jb+I38hKIoSwvtmBTtBceQGoKiDPaCadoGEG6q9xpb4Od+ebsMfYNvgXcYLWQWOYAPouMzOtH7dthEzu6GNfQgNu6CU/vGt8Y6GkOIPYgKs3Di5NtjFSl0DDvYlY1zLvzl6NtkjZXGrzmwazeHJfcjZ1BDMa/rV0CNpmrTME0r3y7LiJpgOvh2WUYpG06AhhpFwx9MQ7VkAdsgjt9QpbD4K4ag85CGNLwDtMynoQGgaxrFfBi/IWinJn5DxZU3aN87fsP102uxGMZf4+c2BzCCMhQ9w8a3yzKKvTZUw4OaIWZbX2Lvl0qr5jfWFhXewlRnc/Q/cKdO3M9gPIMWbBRX3VfAtkm1dn/vwYqnimH0BlYFlesLgvVq9jDE6mQoLrpvYFVQ2tlwAizSqKfDtMbKFonTweBF4Laf1A3RimC9kyZX8A6cKLb0L2DlignF8veCb58FdGMN4q1L1ZnYAQomquEUrTicsb3PtQBcLrySqwUb3yaraG3NIIaZGaVKH/nWzMtrWqzAKiqe0FjZgJ6lubLwJhpT8Bakj7jvIWKV9q84J8UDWOH7iusKHDrMzLglRewwM+OUFNHDzIxL/xs9zFyxT4r4YWbGvrUIufW7hO2hDKydik3sOhqghf0idou3AFLhf2ye04Ce0QnzeBpKHP3F+BUute9fbExu2FzE7K5tYra0wW3NbGByAAW1fbiNQaV4DizKzBh0+ZGba1t8PoQBRpkJg3QRRlX4jFHrNITK/gWzo3xBvTNxxnTtHUxleMO0HxVS5XQhNy6fAssYNn3hoBTtXp0Y0MImt+zsH3z/8I+x3n+qg3hBu+kbkh9p4Z9UaRw3Zg7Qwyh5r3AaIwO8LjMjVaF0FLpsAL97MQ6f5jnorqhyJEmRRv8QdFc0CcZQigzZDgf1LxyKIfH7ESzJq9MOh/QfqMt2SPw8suOzWexwF2iRLjsdvzuY0+CVez2bK9Tn9lsxdgos3xq8Z8uy3/tzJuOf2H978J4o+/1mpcixVT6vbkW9zy3hcep9LbC8R39pJ9vfbPJAqfnVljGp7531bMi0go5I6ze0rKOzJSdaFcMedO7TUQZgv4nW1VD/WqE2jvtWe1yz18X1BEcAho4TkYb+oSENaegfGtKQhv6hIQ1p6B8a0pCG/qEhDeM3TPoyw8b9wpug4ypICCGEEEIIIYQQQgghhBBCCPk7/AOT7UbJ5bD1AAAAAABJRU5ErkJggg=="
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
              <p className="nombreusuario text-white fw-bold">
                {infoUser.firstname} {infoUser.lastname}
              </p>
              <p className="usuario mt-3">@{infoUser.username}</p>
            </div>
            <div className="col-2">
              <MoreHorizIcon className="mt-3" />
            </div>
          </div>
        </button>
      )}
      position="top center"
      closeOnDocumentClick
    >
      <div className="modal_logout">
        <div className="container d-flex text-start">
          <div className="row">
            <div className="col-2 me-3 div-avatar">
              <img
                className="rounded-circle mt-1 avatar"
                src={
                  infoUser.image ||
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEWzs7P///+vr6/j4+Otra3u7u7Y2Njm5ua3t7f7+/vAwMC6urrU1NTz8/PQ0NDp6enKysrExMTc3NzfYYiMAAAEUUlEQVR4nO2dC4KqMAxFISA/QWH2v9gH4vj8ANo22NvOPSvwWJo0aQtJQgghhBBCCCGEEEIIIYQQQgghX0Uu+P4VOyLF+VxmRd9Eq1mlv3TZkEQpmd5z7uMbybxLH8mayBwlS5/pIhvI04thmtZtTDPyuGA4UkQ0jsuGaX3Kff8yHWTNcJyPEcQcyav2OZbeUwY+HSXZ1LtwClhRqtc8scAh1GGUY/mJ30QfpKL8fOo3koWnmPe1geCYOI6hOX78gN4YQlKUxmwAZwJK/9Jb+I38hKIoSwvtmBTtBceQGoKiDPaCadoGEG6q9xpb4Od+ebsMfYNvgXcYLWQWOYAPouMzOtH7dthEzu6GNfQgNu6CU/vGt8Y6GkOIPYgKs3Di5NtjFSl0DDvYlY1zLvzl6NtkjZXGrzmwazeHJfcjZ1BDMa/rV0CNpmrTME0r3y7LiJpgOvh2WUYpG06AhhpFwx9MQ7VkAdsgjt9QpbD4K4ag85CGNLwDtMynoQGgaxrFfBi/IWinJn5DxZU3aN87fsP102uxGMZf4+c2BzCCMhQ9w8a3yzKKvTZUw4OaIWZbX2Lvl0qr5jfWFhXewlRnc/Q/cKdO3M9gPIMWbBRX3VfAtkm1dn/vwYqnimH0BlYFlesLgvVq9jDE6mQoLrpvYFVQ2tlwAizSqKfDtMbKFonTweBF4Laf1A3RimC9kyZX8A6cKLb0L2DlignF8veCb58FdGMN4q1L1ZnYAQomquEUrTicsb3PtQBcLrySqwUb3yaraG3NIIaZGaVKH/nWzMtrWqzAKiqe0FjZgJ6lubLwJhpT8Bakj7jvIWKV9q84J8UDWOH7iusKHDrMzLglRewwM+OUFNHDzIxL/xs9zFyxT4r4YWbGvrUIufW7hO2hDKydik3sOhqghf0idou3AFLhf2ye04Ce0QnzeBpKHP3F+BUute9fbExu2FzE7K5tYra0wW3NbGByAAW1fbiNQaV4DizKzBh0+ZGba1t8PoQBRpkJg3QRRlX4jFHrNITK/gWzo3xBvTNxxnTtHUxleMO0HxVS5XQhNy6fAssYNn3hoBTtXp0Y0MImt+zsH3z/8I+x3n+qg3hBu+kbkh9p4Z9UaRw3Zg7Qwyh5r3AaIwO8LjMjVaF0FLpsAL97MQ6f5jnorqhyJEmRRv8QdFc0CcZQigzZDgf1LxyKIfH7ESzJq9MOh/QfqMt2SPw8suOzWexwF2iRLjsdvzuY0+CVez2bK9Tn9lsxdgos3xq8Z8uy3/tzJuOf2H978J4o+/1mpcixVT6vbkW9zy3hcep9LbC8R39pJ9vfbPJAqfnVljGp7531bMi0go5I6ze0rKOzJSdaFcMedO7TUQZgv4nW1VD/WqE2jvtWe1yz18X1BEcAho4TkYb+oSENaegfGtKQhv6hIQ1p6B8a0pCG/qEhDeM3TPoyw8b9wpug4ypICCGEEEIIIYQQQgghhBBCCPk7/AOT7UbJ5bD1AAAAAABJRU5ErkJggg=="
                }
                alt=""
              />
            </div>
          </div>
          <div className="col-6">
            <p className="nombreusuario text-white fw-bold">
              {infoUser.firstname} {infoUser.lastname}
            </p>
            <p className="usuario mt-3">@{infoUser.username}</p>
          </div>
          <div className="col-2">
            <MoreHorizIcon className="mt-3" />
          </div>
        </div>
        <hr></hr>
        <h5 className="mt-3 ms-2">Add an existing account </h5>
        <button className="bg-black text-white" onClick={() => logout()}>
          <h5 className="mt-3">Logout @{infoUser.username} </h5>
        </button>
      </div>
    </Popup>
  );
}

export default LogoutModal;
