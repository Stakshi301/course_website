import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => (
  <>
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row justify-content-between">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  {props.title}
                  <strong className="brand-name">{props.bname}</strong>
                </h1>
                <h2 className="my-2">{props.desc}</h2>
                <div className="mt-3">
                  <NavLink className="btn-get-started" to={props.link}>
                    {props.btn}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} className="img-fluid animated" alt="homeimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Common;
