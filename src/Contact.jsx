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
    setData((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Message successfully sent 🎉\nName: ${data.fname}`);
    setData({
      fname: "",
      phone: "",
      email: "",
      msg: "",
    });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center gradient-text custom-underline">Contact Page</h1>
      </div>
      <div className="container container_div">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  name="fname"
                  value={data.fname}
                  onChange={inputEvent}
                  placeholder="John Doe"
                  required
                />

                <label htmlFor="phoneInput" className="form-label mt-3">Phone No</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneInput"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="9876543210"
                  required
                />

                <label htmlFor="emailInput" className="form-label mt-3">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="messageInput" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="messageInput"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3 mt-3">
                  Confirm identity
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
