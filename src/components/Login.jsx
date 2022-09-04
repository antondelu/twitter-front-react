import "bootstrap/dist/css/bootstrap.min.css";
import "../Login.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { LoginModal } from "./LoginModal.jsx";
import { RegisterModal } from "./RegisterModal";

export const Login = () => {
  return (
    <div className="login">
      <div className="row">
        <div className="col-md-7 backgroundimg leftside">
          <img className="twitterimg" src="./twitter_logo_white.png" alt="" />
        </div>
        <div className="col-md-5 text-start rightside">
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <TwitterIcon className="fs-1" />
          </button>
          <h1 className="text-light">Lo que está pasando ahora</h1>
          <h4 className="text-light fw-bold">Únete a Twitter hoy mismo.</h4>
          <button className="btngoogle rounded-pill">
            <div className="container d-flex text-start">
              <div className="row">
                <div className="col-2 me-3">
                  <img
                    className="rounded-circle mt-1"
                    src="https://innostudio.de/fileuploader/images/default-avatar.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-8">
                <p className="nombreusuario mb-0 fw-bold">
                  Inicia sesión como Nombre
                </p>
                <p className="usuario">usuario@gmail.com</p>
              </div>
              <div className="col-2">
                <GoogleIcon className="mt-2 googleicon" />
              </div>
            </div>
          </button>
          <button className="btnapple rounded-pill row">
            <div className="container d-flex text-start">
              <div className="row">
                <div className="col-2 me-3">
                  <AppleIcon className="apple-icon" />
                </div>
              </div>
              <div className="col-8">
                <p className="nombreusuario-apple mt-2 fw-bold">
                  Registrarse con Apple
                </p>
              </div>
            </div>
          </button>
          <div className="container d-flex linea-hr">
            <hr className="text-light" />
            <p className="text-light">o</p>
            <hr className="text-light" />
          </div>
          <RegisterModal />
          <p className="terminos-de-servicio">
            Al registrarte, aceptas los Términos de servicio y la Política de
            privacidad, incluida la política de Uso de Cookies.
          </p>
          <h6 className="ya-tienes-cuenta text-white">
            ¿Ya tienes una cuenta?
          </h6>
          <LoginModal />
        </div>
      </div>
      <footer className="footer">
        <div className="row mt-2 w-100">
          <div className="d-flex justify-content-center flex-wrap">
            <div className="mx-2">
              <p>About</p>
            </div>
            <div className="mx-2">
              <p>Help Center</p>
            </div>
            <div className="mx-2">
              <p>Terms of Service</p>
            </div>
            <div className="mx-2">
              <p>Privacy Policy</p>
            </div>
            <div className="mx-2">
              <p>Cookie Policy</p>
            </div>
            <div className="mx-2">
              <p>Accessibility</p>
            </div>
            <div className="mx-2">
              <p>Ads info</p>
            </div>
            <div className="mx-2">
              <p>Blog</p>
            </div>
            <div className="mx-2">
              <p>Status</p>
            </div>
            <div className="mx-2">
              <p>Careers</p>
            </div>
            <div className="mx-2">
              <p>Brand Resources</p>
            </div>
            <div className="mx-2">
              <p>Advertising</p>
            </div>
            <div className="mx-2">
              <p>Marketing</p>
            </div>
            <div className="mx-2">
              <p>Twitter for Business</p>
            </div>
            <div className="mx-2">
              <p>Developers</p>
            </div>
            <div className="mx-2">
              <p>Directory</p>
            </div>
            <div className="mx-2">
              <p>Settings</p>
            </div>
            <div className="mx-2">
              <p>© 2022 Equipo 5, Hack!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
