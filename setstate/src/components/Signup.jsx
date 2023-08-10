// import React from 'react'
import React, { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  function collectName(e) {
    setName(e?.target?.value);
  }
  //for password
  function collectPassword(e) {
    setPassword(e?.target?.value);
  }

  //for email
  function collectEmail(e) {
    setEmail(e?.target?.value);
  }

  //for Phone
  function collectPhone(e) {
    setPhone(e?.target?.value);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <form>
            <div className="mb-2">
              <input
                className="form-control p-3"
                type="email"
                placeholder="Name"
                onChange={(e) => collectName(e)}
              />
              {/* {name} */}
            </div>
            <div className="mb-2">
              <input
                className="form-control p-3"
                type="password"
                placeholder="Email Address"
                onChange={(e) => collectEmail(e)}
              />
              <div className="form-text">
                We will never share your email to anyone else.
              </div>
            </div>
            <div className="mb-2">
              <input
                className="form-control p-3"
                type="password"
                placeholder="Password"
                onChange={(e) => collectPassword(e)}
              />
            </div>

            <div className="mb-2">
              <input
                className="form-control p-3"
                type="number"
                placeholder="Phone No."
                onChange={(e) => collectPhone(e)}
              />
            </div>
            <button
              className="btn btn-primary p-2 fs-5 fw-bold"
              style={{ width: "100%" }}
            >
              Log in
            </button>

            <a href="/" className=" text-center text-primary mt-4">
              <p>Forgotten password</p>
            </a>
            <hr />
            <div className="container d-flex justify-content-center">
              <button
                className="btn mt-2 p-2 fs-5"
                style={{
                  backgroundColor: "rgb(66, 183, 42)",
                  color: "white",
                }}
              >
                Create new account
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container text-align-center">
        <div className="col-lg-12">
          <div className="p-4">
            <ul>
              <li>{name}</li>
              <li>{email}</li>
              <li>{password}</li>
              <li>{phone}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
