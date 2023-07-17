import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  function navHome() {
    if (document.getElementById("loginuserpassword").value === "admin") {
      navigate("/home");
    }
  }

  return (
    <>
      <div className="LoginBg">
        <div className="loginOuter">
          <h2 className="text-light text-center">login.</h2>
          <form className="loginformcontainer text-light">
            <div className="mb-3 row">
              <label
                htmlFor="loginusername"
                className="col-sm-2 col-form-label"
              >
                username
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  id="loginusername"
                  value="admin"
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="loginuserpassword"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="loginuserpassword"
                  required
                />
              </div>
            </div>
            <button
              onClick={navHome}
              id="loginSubmit"
              type="submit"
              className="btn btn-primary"
            >
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
