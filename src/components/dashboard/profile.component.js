import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import UserService from "../services/user.service";

const required = (value, id) => {
  let elname = id.name;
  if (elname === 'username') elname = "Phone";


  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        please enter the value!
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const confirmPassword = (value, props, components) => {
  //console.log("components",components['password'][0].value);
  let pass = components['password'][0].value;
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  } else if (value != pass) {
    return (
      <div className="alert alert-danger" role="alert">
        Password and confirm password are not matching.
      </div>
    );
  }
};

class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirmPassword: "",
      successful: false,
    };
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
  }



  handleChangePassword(e) {
    e.preventDefault();

    /*
    this.setState({
      successful: false,
    });

    this.form.validateAll();

    const { history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
        
      let user = this.state;
      console.log("user",user);
        
      
    }
    */
  }


  render() {
    const { message } = this.props;

    let messages = "";
    if (message && message.length > 0) {
      messages = message[0].messages[0].message;
    }

    console.log("error message", message);
    return (
      <div className="col-md-12">
        <div className="content">
          <div className="container">
            <hr />
            <div className="row">
              <div className="col-md-6 order-md-2">
                <img src="./images/register_vaccine.jpg" alt="register" className="img-fluid" />
              </div>

              <div className="col-md-6 contents">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="mb-4">
                      <h3><strong className="myvacc_theme"><FontAwesomeIcon icon="syringe" />&nbsp;Change Password</strong></h3>

                    </div>
                    <Form
                      onSubmit={this.handleChangePassword}
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      {!this.state.successful && (
                        <div>

                          <div className="form-group">
                            <Input
                              type="password"
                              className="form-control"
                              name="password"
                              value={this.state.password}
                              onChange={this.onChangePassword}
                              validations={[required, vpassword]}
                              placeholder="Password"
                            />
                          </div>
                          <div className="form-group">
                            <Input
                              type="password"
                              className="form-control"
                              name="confirmPassword"
                              value={this.state.confirmPassword}
                              onChange={this.onChangeConfirmPassword}
                              validations={[required, confirmPassword]}
                              placeholder="Confirm Password"
                            />
                          </div>

                          {message && (
                            <div className="form-group">
                              <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                {messages}
                              </div>
                            </div>
                          )}
                          <div className="form-group">
                            <button className="btn btn-primary btn-block">Change password</button>
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
                    {this.state.successful && (
                      <div>
                        <p> Password Changed successful, please login again</p>
                      </div>

                    )}
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
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);
