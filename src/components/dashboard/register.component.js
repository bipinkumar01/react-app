import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



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

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length != 10) {
    return (
      <div className="alert alert-danger" role="alert">
        Please enter valid phone number.
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

const vfirstname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The firstname must be between 3 and 20 characters.
      </div>
    );
  }
};

const vlastname = (value) => {
  if (value.length < 1 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The lastname must be between 1and 20 characters.
      </div>
    );
  }
};

const dob = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Date of Birth should not be empty
      </div>
    );
  }
}

const pincode = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Pincode field should not be empty
      </div>
    );
  } else if (value.length != 6) {
    return (
      <div className="alert alert-danger" role="alert">
        Please enter valid Pincode
      </div>
    );
  }
}


class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.onChangePinCode = this.onChangePinCode.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: "",
      dob: "",
      age: "",
      address: "",
      pincode: "",
      successful: false,
    };
  }

  gotoLogin = () => {
    const { history } = this.props;
    history.push("/register");
    window.location.reload();
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
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

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value,
    });
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value,
    });
  }

  onChangeDOB(e) {
    let age_latest = this.calculate_age(e.target.value);
    this.setState({
      dob: e.target.value,
      age: age_latest
    });
  }

  handleAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onChangePinCode(e) {
    this.setState({
      pincode: e.target.value,
    });
  }

  calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    console.log(age_now);
    return age_now;
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.form.validateAll();

    //  const { history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {

      let user = this.state;
      console.log("user", user);
      this.props.dispatch(register(this.state))
        .then(() => {
          //history.push("/home");
          //window.location.reload();
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });

    }
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
                      <h3><strong className="myvacc_theme"><FontAwesomeIcon icon="syringe" />&nbsp;Register</strong></h3>

                    </div>
                    <Form
                      onSubmit={this.handleRegister}
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      {!this.state.successful && (
                        <div>
                          <div className="form-group">
                            <Input
                              type="text"
                              className="form-control"
                              name="firstname"
                              value={this.state.firstname}
                              onChange={this.onChangeFirstname}
                              validations={[required, vfirstname]}
                              placeholder="First Name"
                            />
                          </div>
                          <div className="form-group">
                            <Input
                              type="text"
                              className="form-control"
                              name="lastname"
                              value={this.state.lastname}
                              onChange={this.onChangeLastname}
                              validations={[required, vlastname]}
                              placeholder="Last Name"
                            />
                          </div>
                          <div className="form-group">
                            <Input
                              type="text"
                              className="form-control"
                              name="email"
                              value={this.state.email}
                              onChange={this.onChangeEmail}
                              validations={[required, email]}
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group">
                            <Input
                              type="text"
                              className="form-control"
                              name="username"
                              value={this.state.username}
                              onChange={this.onChangeUsername}
                              validations={[required, vusername]}
                              placeholder="Phone"
                            />
                          </div>
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
                          <div className="form-group">
                            <Input
                              type="date"
                              className="form-control"
                              name="dob"
                              value={this.state.dob}
                              onChange={this.onChangeDOB}
                              validations={[required, dob]}
                              placeholder="Date of Birth"
                            />
                          </div>
                          <div className="form-group">
                            <Input
                              type="text"
                              className="form-control"
                              value={this.state.age}
                              placeholder="Your age"
                              name="age"
                              readOnly
                            />
                          </div>
                          <div className="form-group">
                            <textarea className="form-control" value={this.state.address} onChange={this.handleAddress} placeholder="Address" />
                          </div>
                          <div className="form-group">
                            <Input
                              type="number"
                              className="form-control"
                              value={this.state.pincode}
                              onChange={this.onChangePinCode}
                              validations={[required, pincode]}
                              placeholder="Pincode"
                              name="pincode"
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
                            <button className="btn btn-primary btn-block">Sign Up</button>
                          </div>
                          <p>Have a Account?  <Link to={"/login"}>Login</Link></p>

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
                        <p> Registered successful, please check email:{this.state.email}  to acitvate the account  </p>
                        <button className="btn btn-primary btn-block" onClick={this.gotoLogin}>Register</button>
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
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Register);
