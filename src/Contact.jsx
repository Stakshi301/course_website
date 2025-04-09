import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fname}`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact page</h1>
      </div>
      <div className="container container_div">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={inputEvent}
                  name="fname"
                  value={data.name}
                  placeholder="name@example.com"
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Phone No
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={inputEvent}
                  name="phone"
                  value={data.phone}
                  placeholder="name@example.com"
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={inputEvent}
                  name="email"
                  value={data.email}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={inputEvent}
                  name="msg"
                  value={data.msg}
                  placeholder="name@example.com"
                ></textarea>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-3 mt-3">
                    Confirm identity
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
