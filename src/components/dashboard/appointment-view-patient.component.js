import React, { Component } from "react";
//import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";
import AppointmentService from '../../services/appointment.service';

class AppointmentViewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      apdate: "",
      person: {},
      vaccines: [],
      vaccine: ""
    };
  }

  formatDate = dt => {
    if (dt) {
      let date = dt.replace("T", " ");
      date = date.substring(0, 16);
      return date;
    } else {
      return "";
    }
  }

  componentDidMount() {

    const { user: session } = this.props;
    const id = this.props.match.params.id;
    AppointmentService.getAPDetails(session.user, id)
      .then(resp => {
        console.log("resp=>", resp.data);
        this.setState(resp.data);
      })
      .catch(error => {
        console.log(error);
      });

    AppointmentService.getVaccines()
      .then(resp => {
        console.log("vaccines=>", resp.data);
        this.setState({ vaccines: resp.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    //const { user: session } = this.props;
    console.log("state==>", this.state);
    const person = this.state.person;
    return (

      <div className="col-md-12">
        <div className="content">
          <div className="container">

            <hr />
            <div className="row">
              <div className="col-md-12 contents">
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <h4><strong className="myvacc_theme">Appointment</strong></h4>
                    </div>
                    <div className="mb-12">
                      {person && (
                        <table>
                          <tbody>
                            <tr>
                              <td width="100px"> <strong>Date:</strong> </td> <td width="200px"> {this.formatDate(this.state.apdate)} </td>
                              <td rowSpan="3">
                                <strong>Chat&nbsp;&nbsp;&nbsp;:</strong> &nbsp; <a href=" "> http://whatsup.com </a><br />
                                <strong>Video&nbsp;:</strong> &nbsp; <a href=" "> http://in.zoom.com </a>
                              </td>
                            </tr><tr>
                              <td> <strong>Amount: </strong></td> <td> Rs. {this.state.amount} </td>
                            </tr><tr>
                              <td> <strong>Status:</strong></td> <td>Paid </td>
                            </tr>

                            <tr>
                              <td colSpan="3">  <strong>Notes:</strong> <br />  {this.state.notes} </td>
                            </tr>
                          </tbody>
                        </table>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12 contents">
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <h4><strong className="myvacc_theme">Patient Info</strong></h4>
                    </div>
                    {person && (
                      <table>
                        <tbody>
                          <tr>
                            <td width="100px"> <strong>Name:</strong></td> <td> {person.firstname} </td>
                          </tr><tr>
                            <td> <strong>Age:</strong></td> <td> {person.age} </td>
                          </tr><tr>
                            <td> <strong>weight:</strong></td> <td> {person.weight} </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12 contents">
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <button className="btn btn-primary btn-sm"> Change Date </button> &nbsp;
                      <button className="btn btn-primary btn-sm"> Cancel </button>  &nbsp;
                      <button className="btn btn-primary btn-sm"> Go Back </button> &nbsp;
                      <button className="btn btn-primary btn-sm"> Payment </button>  &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <hr />
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
export default connect(mapStateToProps)(AppointmentViewPatient);
