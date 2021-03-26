import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEye, faEdit, faTrash, faUserPlus, faUserMd, faUsers, faSignInAlt, faSyringe, faNotesMedical, faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons'

import Login from "../dashboard/login.component";
import Register from "../dashboard/register.component";
import Home from "../dashboard/home.component";
import Profile from "../dashboard/profile.component";
import BoardUser from "../dashboard/board-user.component";
import BoardModerator from "../dashboard/board-moderator.component";
import BoardAdmin from "../dashboard/board-admin.component";

import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";

import { history } from "../../helpers/history"; 
import profileEditComponent from "../dashboard/profile-edit.component";
import membersComponent from "../dashboard/members.component";
import memberAddComponent from "../dashboard/member-add.component";
import memberViewComponent from "../dashboard/member-view.component";
import memberEditComponent from "../dashboard/member-edit.component";
import appointmentComponent from "../dashboard/appointment.component";
import appointmentAddComponent from "../dashboard/appointment-add.component";
import appointmentViewComponent from "../dashboard/appointment-view.component";
import appointmentViewPatientComponent from "../dashboard/appointment-view-patient.component";
import appointmentViewDoctorComponent from "../dashboard/appointment-view-doctor.component";
import appointmentViewTechComponent from "../dashboard/appointment-view-tech.component";
import vaccineComponent from "../dashboard/vaccine.component";
import AuthGaurd from  "../../AuthGaurd";

import Header from "../../components/front/Header";

library.add(fab, faEye, faEdit, faTrash, faUserPlus, faUserMd, faUsers, faSignInAlt, faSyringe, faNotesMedical, faUser);

class DashBoardHeader extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };  

    history.listen((location) => {
      console.log("location dashboard "+JSON.stringify(location));
      props.dispatch(clearMessage()); // clear message when changing location
    });  
  }

  isAuthticated = () => {
    return this.state.currentUser ? true : false;
  }

  componentDidMount() {
    const user = this.props.user;
    console.log("dash board "+user);
    history.listen(this.onRouteChange);

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.user.role.type.includes("authenticated"),
        showAdminBoard: user.user.role.type.includes("doctor"),
      });

      console.log("location "+JSON.stringify(history));

      // history.listen((location) => {
      //   console.log("location "+JSON.stringify(location));
      //   this.props.dispatch(clearMessage()); // clear message when changing location
      // }); 
    }

  }

  logOut() {
    this.props.dispatch(logout());
  }

  render(){
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    
    console.log("showModeratorBoard ",showModeratorBoard);
    console.log("showAdminBoard ", showAdminBoard);
    // if(history.location['pathname']=="/"){
    //   return (
    //     <Header/>
    //   )
    // } else {
      return(
        <Router history={history}>
          <div>
            <nav className="navbar navbar-expand-sm ">
              <Link to={"/"} className="navbar-brand">
                <img src="/logo-img.png" className="logo_custom" alt="MyVacc"></img>
              </Link>
              <div className="navbar-nav ">

                {showModeratorBoard && (
                  <li className="nav-item">
                    <Link to={"/member"} className="nav-link">
                      Family
                    </Link>
                  </li>
                )}
                {(!showModeratorBoard || !showAdminBoard) && (
                  <li className="nav-item">
                    <Link to={"/appointment"} className="nav-link">
                      Appointments
                    </Link>
                  </li>
                )}
                {(!showModeratorBoard || !showAdminBoard) && (
                  <li className="nav-item">
                    <Link to={"/vaccine"} className="nav-link">
                      Vaccines
                    </Link>
                  </li>
                )}
                {(!showModeratorBoard || !showAdminBoard) && (
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      Settings
                    </Link>
                  </li>
                )}
                {!showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"#"} className="nav-link">
                      Welcome Doctor
                    </Link>
                  </li>
                )}

              </div>

              {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      {currentUser.user.firstname ? currentUser.user.firstname : currentUser.user.username}

                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      Logout
                    </a>
                  </li>
                </div>
              ) : ""}
            </nav>

            <div className="container mt-3">
              <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/vaccine" component={vaccineComponent} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile/edit" component={profileEditComponent} />
                <Route exact path="/member" component={membersComponent} />
                <Route exact path="/member/add" component={memberAddComponent} />
                <Route exact path="/member/view/:id" component={memberViewComponent} />
                <Route exact path="/member/edit/:id" component={memberEditComponent} />
                <Route exact path="/appointment" component={appointmentComponent} />
                <Route exact path="/appointment/add" component={appointmentAddComponent} />
                <Route exact path="/appointment/view" component={appointmentViewComponent} />
                <Route exact path="/appointment/view/patient/:id" component={appointmentViewPatientComponent} />
                <Route exact path="/appointment/view/doctor/:id" component={appointmentViewDoctorComponent} />
                <Route exact path="/appointment/view/tech/:id" component={appointmentViewTechComponent} />
                <Route path="/user" component={BoardUser} />
                <Route path="/mod" component={BoardModerator} />
                <Route path="/admin" component={BoardAdmin} />
              </Switch>
            </div>
          </div>
        </Router>
      );
    // }
  }
  
}


function mapStateToProps(state) {
  console.log("state ",state);
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(DashBoardHeader);
// export default DashBoardHeader;