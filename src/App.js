import React, { useEffect } from "react";

const App = () => {
  const strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );

  const mediumPassword = new RegExp(
    "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
  );

  const passwordInputChange = (e) => {
    let passwordStrength = document.getElementById("passwordStrength");
    if (e.target.value.length !== 0) {
      if (strongPassword.test(e.target.value)) {
        e.target.classList.remove(
          "border-danger",
          "text-danger",
          "border-warning",
          "text-warning"
        );
        e.target.previousSibling.classList.remove(
          "border-danger",
          "text-danger",
          "border-warning",
          "text-warning"
        );
        e.target.classList.add("border-success", "text-success");
        e.target.previousSibling.classList.add(
          "border-success",
          "text-success"
        );
        passwordStrength.classList.remove("text-warning", "text-danger");
        passwordStrength.classList.add("text-success");
        passwordStrength.textContent = "Strength: Strong";
      } else if (mediumPassword.test(e.target.value)) {
        e.target.classList.remove(
          "border-danger",
          "text-danger",
          "border-success",
          "text-success"
        );
        e.target.previousSibling.classList.remove(
          "border-danger",
          "text-danger",
          "border-success",
          "text-success"
        );
        e.target.classList.add("border-warning", "text-warning");
        e.target.previousSibling.classList.add(
          "border-warning",
          "text-warning"
        );
        passwordStrength.classList.remove("text-success", "text-danger");
        passwordStrength.classList.add("text-warning");
        passwordStrength.textContent = "Strength: Medium";
      } else {
        e.target.classList.remove(
          "border-success",
          "text-success",
          "border-warning",
          "text-warning"
        );
        e.target.previousSibling.classList.remove(
          "border-success",
          "text-success",
          "border-warning",
          "text-warning"
        );
        e.target.classList.add("border-danger", "text-danger");
        e.target.previousSibling.classList.add("border-danger", "text-danger");
        passwordStrength.classList.remove("text-warning", "text-success");
        passwordStrength.classList.add("text-danger");
        passwordStrength.textContent = "Strength: Low";
      }
    } else {
      e.target.classList.remove(
        "border-success",
        "text-success",
        "border-warning",
        "text-warning",
        "border-danger",
        "text-danger"
      );
      e.target.previousSibling.classList.remove(
        "border-success",
        "text-success",
        "border-warning",
        "text-warning",
        "border-danger",
        "text-danger"
      );
      passwordStrength.classList.remove(
        "text-warning",
        "text-success",
        "text-danger"
      );
      passwordStrength.textContent = "";
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (
      sessionStorage.getItem("user_name") != null &&
      sessionStorage.getItem("user_pass")
    ) {
      if (
        email.value === sessionStorage.getItem("user_name") &&
        password.value === sessionStorage.getItem("user_pass")
      ) {
        alert("Login successful.");
      } else {
        alert("Login failed.");
      }
    }
  };

  useEffect(() => {
    sessionStorage.setItem("user_name", "username@domain.com");
    sessionStorage.setItem("user_pass", "User@100x");
  });

  return (
    <div className="container p-3">
      <div className="row justify-content-center g-3">
        <div className="col-md-8 p-0 shadow-lg">
          <div className="row g-0">
            <div className="col-md-6 p-0">
              <img src="/images/bg.jpg" alt="background image" className="bg" />
            </div>
            <div className="col-md-6 text-center py-5 bg-white">
              <h1 className="display-6" style={{ fontWeight: 600 }}>
                Welcome
              </h1>
              <p className="text-muted">Log in to your account to continue</p>
              <form onSubmit={(e) => formSubmitHandler(e)} className="px-4">
                <div className="input-group mb-4">
                  <span className="input-group-text text-muted bg-white border-0 border-start border-top border-bottom">
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control border-0 border-end border-top border-bottom"
                    placeholder="awesome@user.com"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="input-group mb-2">
                  <span className="input-group-text text-muted bg-white border-0 border-start border-top border-bottom">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control border-0 border-end border-top border-bottom"
                    placeholder="awesome@user.com"
                    id="password"
                    name="password"
                    onInput={(e) => passwordInputChange(e)}
                  />
                </div>
                <span id="passwordStrength"></span>
                <small className="d-block text-end mb-3">
                  <a href="#" className="link-secondary">
                    Forgot your password?
                  </a>
                </small>
                <button className="btn btn-primary btn-teal rounded-pill w-25">
                  Log In
                </button>
              </form>
              <p className="text-muted my-3">
                Don't have an account?{" "}
                <a href="#" className="link-secondary">
                  Sign up!
                </a>
              </p>
              <div className="d-flex justify-content-evenly w-75 mx-auto">
                <a href="#" className="link-secondary">
                  <i className="fab fa-facebook-square fa-2x"></i>
                </a>
                <a href="#" className="link-secondary">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" className="link-secondary">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
