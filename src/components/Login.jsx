import { useState } from "react";
import sendingData from "../services/service";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit() {
    const { data } = await sendingData(username, password);
    console.log(data.token);
    dispatch({
      type: "TOKEN",
      payload: {
        token: data.token,
        username: username,
      },
    });
    navigate("/home");
  }
  return (
    <div className="text-white ">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label>username</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};
