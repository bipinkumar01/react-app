import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEye, faEdit, faTrash, faUserPlus, faUserMd, faUsers, faSignInAlt, faSyringe, faNotesMedical, faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons'

// import Login from "./components/login.component";
// import Register from "./components/register.component";
// import Home from "./components/home.component";
// import Profile from "./components/profile.component";
// import BoardUser from "./components/board-user.component";
// import BoardModerator from "./components/board-moderator.component";
// import BoardAdmin from "./components/board-admin.component";

import { logout } from "./actions/auth";
import { clearMessage, clear} from "./actions/message";

import { history } from './helpers/history';
// import profileEditComponent from "./components/profile-edit.component";
// import membersComponent from "./components/members.component";
// import memberAddComponent from "./components/member-add.component";
// import memberViewComponent from "./components/member-view.component";
// import memberEditComponent from "./components/member-edit.component";
// import appointmentComponent from "./components/appointment.component";
// import appointmentAddComponent from "./components/appointment-add.component";
// import appointmentViewComponent from "./components/appointment-view.component";
// import appointmentViewPatientComponent from "./components/appointment-view-patient.component";
// import appointmentViewDoctorComponent from "./components/appointment-view-doctor.component";
// import appointmentViewTechComponent from "./components/appointment-view-tech.component";
// import vaccineComponent from "./components/vaccine.component";
// import AuthGaurd from "./AuthGaurd";

import DashBoardHeader from "./components/dashboard/DashBoardHeader";
import Header from "./components/front/Header";

library.add(fab, faEye, faEdit, faTrash, faUserPlus, faUserMd, faUsers, faSignInAlt, faSyringe, faNotesMedical, faUser)
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    // history.listen((location) => {
    //   console.log("location app "+JSON.stringify(location));
    //   props.dispatch(clearMessage()); // clear message when changing location
    // });

    history.listen((location, action) => {
      // clear alert on location change
      props.dispatch(clearMessage());
    });
  }

  isAuthticated = () => {
    return this.state.currentUser ? true : false;
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.user.role.type.includes("authenticated"),
        showAdminBoard: user.user.role.type.includes("doctor"),
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    console.log("current User "+currentUser);
     return (
        <DashBoardHeader/>
        //<Header/>
      )
    /*if (currentUser == undefined) //check condition
    {
      console.log("inside if");
      return (
        <DashBoardHeader/>
        // <Header/>
      )
    }else {
      console.log("inside else");
      return (
        <Header/>
      )
    }*/
  }
}

function mapStateToProps(state) {
  console.log("state ",state);
  const { user } = state.auth;
  return {
    user,
  };
}

const actionCreators = {
  clearAlerts: clearMessage
};

export default connect(mapStateToProps, actionCreators)(App);
