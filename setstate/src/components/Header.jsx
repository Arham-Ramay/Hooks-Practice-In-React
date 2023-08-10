import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            <img
              src="hooks pic.png"
              alt="Logo"
              width="35"
              height="29"
              className="d-inline-block align-text-top me-2"
            />
            Hooks
          </a>
        </div>
      </nav>
    </div>
  );
}
