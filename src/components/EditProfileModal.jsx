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
import { Link } from "react-router-dom";
import "../EditProfileModal.css";
import axios from "axios";

export const ModalEditProfile = ({ refresh, setRefresh }) => {
  const [visible, setVisible] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [coverImage, setCoverImage] = useState("");
  const store = useSelector((state) => state);
  const myUser = store.login;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function editProfile() {
    const response = await axios({
      method: "post",
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
        "Content-Type": "application/json",
      },
    });
    setRefresh(!refresh);
    setVisible(false);
    return response;
  }

  const upLoadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "twitter");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/mdeluca/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    setImage(file.secure_url);
    console.log(file.secure_url);
    setLoading(false);
  };

  const upLoadImageCover = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "twitter");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/mdeluca/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    setCoverImage(file.secure_url);
    console.log(file.secure_url);
    setLoading(false);
  };

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
                  <input type="file" onChange={upLoadImage} />
                  {/* {loading ? <h3>Cargando imagen</h3> : <img src={image} />} */}
                </div>
                <div>
                  <label>CoverImage </label>
                  <input type="file" onChange={upLoadImageCover} />
                </div>
                <div className="d-flex justify-content-center m-2 mt-4">
                  <CButton color="primary" onClick={() => editProfile()}>
                    Guardar
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
