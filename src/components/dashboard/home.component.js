import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
//import UserService from "../services/user.service";
//export default 
class Home extends Component {

  /*
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      message:""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          user: response.data
        });
      },
      error => {
        this.setState({
          message:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }
*/
  render() {
   
    const { user: currentUser } = this.props;
    console.log("currentUser", currentUser)
    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    let content = "Welcome user";
    if(currentUser.user.role.type === 'authenticated'){
      content = "Welcome User";
    } else if(currentUser.user.role.type === 'doctor'){ 
      content = "Welcome Doctor";
    }

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
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

export default connect(mapStateToProps)(Home);