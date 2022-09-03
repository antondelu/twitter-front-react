import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

import "../EditProfileModal.css";
import axios from "axios";

export const ModalEditProfile = () => {
  const [visible, setVisible] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const store = useSelector((state) => state);
  const myUser = store.login;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function editProfile() {
    const response = await axios({
      method: "patch",
      url: "http://localhost:8000/user",
      data: {
        firstname: firstname,
        lastname: lastname,
        password: password,
        email: email,
        description: bio,
        image: image,
        coverImage: coverImage,
      },
      headers: {
        Authorization: `Bearer ${myUser.token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    return response;
  }

  return (
    <>
      <button
        className="btn btn-black text-light rounded-pill mb-1 btn-lg"
        onClick={() => setVisible(!visible)}
      >
        Edit profile
      </button>

      <CModal
        className="difuminado"
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <div className="sombra">
          <CModalBody>
            <CModalTitle>Edit Profile</CModalTitle>
            <div>
              <form
                action=""
                onSubmit={(e) => e.preventDefault()}
                encType="multipart/form-data"
              >
                <div>
                  <input
                    placeholder="FirstName"
                    type="text"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                  />
                </div>
                <div>
                  <input
                    placeholder="LastName"
                    type="text"
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                  />
                </div>
                <div>
                  <input
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div>
                  <input
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Bio"
                    type="text"
                    rows="2"
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                  />
                </div>
                <div>
                  <label>Image</label>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                  />
                </div>
                <div>
                  <label>CoverImage </label>
                  <input
                    type="file"
                    onChange={(e) => setCoverImage(e.target.value)}
                    value={coverImage}
                  />
                </div>
                <div className="d-flex justify-content-center m-2 mt-4">
                  <CButton color="primary" onClick={() => editProfile()}>
                    Save changes
                  </CButton>
                </div>
              </form>
            </div>
          </CModalBody>
        </div>
      </CModal>
    </>
  );
};