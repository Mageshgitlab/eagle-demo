import React from "react";

const Tabs = ({ values }) => (
  <div className="contentarea-wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="contentarea-panel">
            <ul className="nav nav-tabs responsive " role="tablist" id="myTab">
              {values.map((value) => (
                <li className="nav-item">
                  <a
                    className={
                      value === "Title Reseach" ? "nav-link active" : "nav-link"
                    }
                    data-toggle="tab"
                    href="#holdings"
                    role="tab"
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>
            <div className="tab-content responsive" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="holdings"
                role="tabpanel"
              >
                <div className="container-fluid">
                  <h3 className="dummy">Content Are Hear 0</h3>
                </div>

                <div className="tab-pane " id="profile" role="tabpanel">
                  <div className="container-fluid">
                    <h3 className="dummy">Content Are Hear 1</h3>
                  </div>
                </div>

                <div className="tab-pane " id="orders" role="tabpanel">
                  <div className="container-fluid">
                    <h3 className="dummy">Content Are Hear 2</h3>
                  </div>
                </div>

                <div className="tab-pane " id="reconciliation" role="tabpanel">
                  <div className="container-fluid">
                    <h3 className="dummy">Content Are Hear 3</h3>
                  </div>
                </div>

                <div className="tab-pane " id="import" role="tabpanel">
                  <div className="container-fluid">
                    <h3 className="dummy">Content Are Hear 4</h3>
                  </div>
                </div>

                <div className="tab-pane " id="assesment" role="tabpanel">
                  <div className="container-fluid">
                    <h3 className="dummy">Content Are Hear 5</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Tabs;
