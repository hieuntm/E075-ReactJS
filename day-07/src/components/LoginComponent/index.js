import { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import Input from "../UI/Input";
import SocialMediaLoginComponent from "./SocialMediaLoginComponent";

const LoginComponent = ({ accounts, onLogin, setCurrentAccount }) => {
  // 2 State quản lý, input của người dùng
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = () => {
    // onRegisterView();
  };

  const loginHandler = () => {
    // Lấy đc username
    // Lấy được mật khẩu

    // Login => Đăng nhập
    for (let account of accounts) {
      if (account.username === username) {
        if (account.password === password) {
          console.log("Dang nhap thanh cong", account);
          setCurrentAccount(account);
          onLogin();
        }
      }
    }
  };

  // Nên truyền 2props => lôi value ra
  // 1 cái nên là để cho InputComponent xử lý

  return (
    <>
      <section className="_form_05">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="_form-05-box">
                <div className="row">
                  <div className="col-sm-5 _lk_nb">
                    <div className="form-05-box-a">
                      <div className="_form_05_logo">
                        <h2>smart</h2>
                        <p>Login using social media to get quick access</p>
                      </div>
                      <SocialMediaLoginComponent />
                    </div>
                  </div>
                  <div className="col-sm-7 _nb-pl">
                    <div className="_mn_df">
                      <div className="main-head">
                        <h2>Login to your account</h2>
                      </div>

                      <div className="form-group">
                        <Input
                          title="Username"
                          displayHorizon={true}
                          value={username}
                          setValue={setUsername}
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter Email"
                          required=""
                          aria-required="true"
                        />
                      </div>

                      <div className="form-group">
                        <tr>
                          <Input
                            title="Password"
                            displayHorizon={true}
                            value={password}
                            setValue={setPassword}
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter Password"
                            required=""
                            aria-required="true"
                          />
                        </tr>
                      </div>

                      <div className="checkbox form-group">
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id=""
                          />
                          <label className="form-check-label" for="">
                            Remember me
                          </label>
                        </div>
                        <a href="#">Forgot Password</a>
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <div className="col-3">
                            <button
                              className="btn btn-primary"
                              onClick={loginHandler}
                            >
                              Login
                            </button>
                          </div>
                          <div className="col-9">
                            <button
                              className="btn btn-secondary"
                              onClick={signUpHandler}
                            >
                              Register
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginComponent;
