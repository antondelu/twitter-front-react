import { CButton, CForm, CFormInput, BsSearch } from "@coreui/react";
import "./sidebar.css";

export const SedibarLeft = () => {
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
      <div className="card-body">
        <div className="card-header fw-bold mt-1 contentTrendsTitle">
          <h4>Trends for you</h4>
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
      </div>

      <div className="row text-white mt-3">
        <div>
          <div className="form-floating mb-3 ">
            <div className="card text-white bg-dark mb-3 mt-4">
              <div className="card-header fw-bold mt-1">
                <h4>You might like</h4>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="card-header fw-bold mt-1 titleFollow">
                      <h4>Who to follow</h4>
                    </div>
                  </div>
                  <div className=" contentFollow">
                    <img src="../../public/logo192.png" alt="" />
                    <div className="trends followUser">
                      <h5 className="card-title fw-light fw-bold card2">
                        Marco De Luca
                      </h5>
                      <div className="contentTrends userName">
                        <p>@userAsda</p>
                      </div>
                    </div>
                    <button className="buttonFollow">Follow</button>
                  </div>
                  <div className=" contentFollow">
                    <img src="../../public/logo192.png" alt="" />
                    <div className="trends followUser">
                      <h5 className="card-title fw-light fw-bold card2">
                        Marco De Luca
                      </h5>
                      <div className="contentTrends userName">
                        <p>@userAsda</p>
                      </div>
                    </div>
                    <button className="buttonFollow">Follow</button>
                  </div>
                  <div className=" contentFollow">
                    <img src="../../public/logo192.png" alt="" />
                    <div className="trends followUser">
                      <h5 className="card-title fw-light fw-bold card2">
                        Marco De Luca
                      </h5>
                      <div className="contentTrends userName">
                        <p>@userAsda</p>
                      </div>
                    </div>
                    <button className="buttonFollow">Follow</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
