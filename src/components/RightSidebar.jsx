// import { CButton, CForm, CFormInput, BsSearch } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";

export const RightSidebar = () => {
  return (
    <div className="col-md-4 text-light">
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" type="search" className="input" />
      </div>
      <div className="card-body pt-2">
        <div className="card-header fw-bold mt-1 contentTrendsTitle">
          <h4 className="text-start ms-3 mb-4 mt-2 fw-bold title">
            Trends for you
          </h4>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Trending in Uruguay</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title fw-light fw-bold card2">Peñarol</h5>
          <p className="amountTwetts">34k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Trending in Uruguay</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title fw-light fw-bold card2">Suarez</h5>
          <p className="amountTwetts">800k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Politics . Trending</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title fw-light fw-bold card2">Cristina</h5>
          <p className="amountTwetts">57.7k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Trending in Uruguay</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title fw-light fw-bold card2">Dubai</h5>
          <p className="amountTwetts">36.7k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Trending in Uruguay</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title fw-light fw-bold  card2">Darwin Nuñez</h5>
          <p className="amountTwetts">5.7k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Trending in Uruguay</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title fw-light fw-bold card2">Pfizer</h5>
          <p className="amountTwetts">39.7k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p className="trendTitle">Sports . Trending</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title fw-light fw-bold card2">Nacional</h5>
          <p className="amountTwetts">80.7k Tweets</p>
        </div>

        <div className="trends">
          <div className="contentTrends">
            <p>Trending in Uruguay</p>
            <h2>···</h2>
          </div>
          <h5 className="card-title fw-light fw-bold card2">Tremendo</h5>
          <p className="amountTwetts">32.7k Tweets</p>
        </div>
        {/* <p className="showmore">Show more</p> */}
      </div>

      <div className="row text-white mt-3">
        <div>
          <div className="form-floating mb-3">
            <div className="card-body whotofollow">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="card-header fw-bold titleFollow">
                    <h4 className="text-start ms-3 mt-3 mt-2 mb-3 fw-bold title">
                      Who to follow
                    </h4>
                    <div className="filaswhotofollow">
                      <div className="container d-flex text-start">
                        <div className="row">
                          <div className="col-2 me-3">
                            <img
                              className="rounded-circle avatar"
                              src="https://innostudio.de/fileuploader/images/default-avatar.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-8">
                          <p className="nombreusuario mb-0 mt-2">
                            NombreUsuario
                          </p>
                          <p className="usuario">@Usuario</p>
                        </div>
                        <div className="col-2">
                          <button className="buttonFollow">Follow</button>
                        </div>
                      </div>
                    </div>
                    <div className="filaswhotofollow">
                      <div className="container d-flex text-start">
                        <div className="row">
                          <div className="col-2 me-3">
                            <img
                              className="rounded-circle avatar"
                              src="https://innostudio.de/fileuploader/images/default-avatar.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-8">
                          <p className="nombreusuario mb-0 mt-2">
                            NombreUsuario
                          </p>
                          <p className="usuario">@Usuario</p>
                        </div>
                        <div className="col-2">
                          <button className="buttonFollow">Follow</button>
                        </div>
                      </div>
                    </div>
                    <div className="filaswhotofollow">
                      <div className="container d-flex text-start">
                        <div className="row">
                          <div className="col-2 me-3">
                            <img
                              className="rounded-circle avatar"
                              src="https://innostudio.de/fileuploader/images/default-avatar.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-8">
                          <p className="nombreusuario mb-0 mt-2">
                            NombreUsuario
                          </p>
                          <p className="usuario">@Usuario</p>
                        </div>
                        <div className="col-2">
                          <button className="buttonFollow">Follow</button>
                        </div>
                      </div>
                    </div>
                    <p className="showmore">Show more</p>
                  </div>
                </div>
              </div>
              <p className="termsofservice mt-3 text-start">
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