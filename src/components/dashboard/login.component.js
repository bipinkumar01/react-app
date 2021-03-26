import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { ForgotPassword } from './forgot-password.component';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {


  togglePopup() {
    console.log("hiii ")
  }

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      isModalOpen: false
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
        .then((resp) => {
          console.log("login", resp);
          history.push("/appointment");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { isLoggedIn, message } = this.props;

    let isModalClose = () => {
      this.setState({ isModalOpen: false });
    }

    if (isLoggedIn) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="col-md-12">
        <div className="content">
          <div className="container">
            <br></br>
            <hr></hr>
            <div className="row">
              <div className="col-md-6 order-md-2">
                <img src="./images/login_vaccine2.jpg" alt="login" className="img-fluid" />
              </div>
              <div className="col-md-6 contents">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="mb-4">
                      <h3><strong className="myvacc_theme"><FontAwesomeIcon icon="sign-in-alt" />&nbsp;Login</strong></h3>

                    </div>
                    <Form
                      onSubmit={this.handleLogin}
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      <div className="form-group first">
                        <Input
                          type="text"
                          className="form-control"
                          name="username"
                          value={this.state.username}
                          onChange={this.onChangeUsername}
                          validations={[required]}
                          placeholder="Email/Phone no."
                        />
                      </div>

                      <div className="form-group last mb-4">

                        <Input
                          type="password"
                          className="form-control"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChangePassword}
                          validations={[required]}
                          placeholder="Password"
                        />
                      </div>

                      <div className="d-flex mb-5 align-items-center">
                        {/* <label className="control control--checkbox mb-0">
                          <span className="caption">Remember me</span>
                          <input type="checkbox" checked="checked" />
                          <div className="control__indicator"></div>
                        </label> */}
                        <span className="ml-auto"><a href=" " className="forgot-pass" onClick={() => this.setState({ isModalOpen: true })}>Forgot Password</a></span>

                        <ForgotPassword
                          show={this.state.isModalOpen}
                          onHide={isModalClose}
                        />
                      </div>


                      <div className="form-group">
                        <button
                          className="btn btn-block custom_btn"
                          disabled={this.state.loading}
                        >
                          {this.state.loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          <span>Login</span>
                        </button>
                        <p>Don't have account? <Link to={"/register"}>Sign Up</Link></p>
                      </div>

                      {message && (
                        <div className="form-group">
                          <div className="alert alert-danger" role="alert">
                            {message}
                          </div>
                        </div>
                      )}
                      <CheckButton
                        style={{ display: "none" }}
                        ref={(c) => {
                          this.checkBtn = c;
                        }}
                      />
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(Login);
