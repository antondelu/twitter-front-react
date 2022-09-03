import axios from "axios";

const URL = "http://localhost:8000";

async function sendingData(username, password) {
  const response = await axios.post(`${URL}/login`, {
    username: username,
    password: password,
  });
  return response;
}

export default sendingData;
