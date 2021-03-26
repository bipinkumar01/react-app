import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";


class ProfileEdit extends Component {
  
  render() {
    const { user: currentUser } = this.props;
    console.log("currentUser", currentUser)


    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.user.firstname?currentUser.user.firstname:currentUser.user.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Id:</strong> {currentUser.user.id}
        </p>
      
          <div>
            <div> Edit Profile </div>
            <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <Form onSubmit={this.handleUpdate} ref={(c) => {this.form = c;}}>
            <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="firstname"
                  label="First Name"
                
                />
            </div>
            <div className="form-group">
                  <label htmlFor="lastname">Last Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="lastname"
                    label="Last Name"
                   
                  />
            </div>      
            <div className="form-group">
                  <button className="btn btn-primary btn-block"> Save </button>
                </div>
          </Form>

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

export default connect(mapStateToProps)(ProfileEdit);
