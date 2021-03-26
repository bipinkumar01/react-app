import React, { Component } from "react";
import { Input } from 'reactstrap';
import { connect } from "react-redux";
import AppointmentService from '../../services/appointment.service';

class AppointmentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      apdate: "",
      person: {},
      vaccines: []
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
    AppointmentService.getAPDetails(session.user, 17)
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
                              <td width="200px">  <strong>Id:</strong> {this.state.id} </td>
                              <td width="300px"> <strong>Date:</strong> {this.formatDate(this.state.apdate)} </td>
                              <td width="200px"> <strong>Amount:</strong> {this.state.amount} </td>
                              <td width="200px"> <strong>Status:</strong> Paid </td>
                            </tr>
                            <tr>
                              <td colSpan="2">  <strong>Chat:</strong> &nbsp; <a href=" "> http://whatsup.com </a>  </td>
                              <td colSpan="2">  <strong>Video:</strong> &nbsp; <a href=" "> http://in.zoom.com </a></td>
                            </tr>
                            <tr>
                              <td colSpan="4">  <strong>Notes:</strong> <br />  {this.state.notes} </td>
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
                      <h4><strong className="myvacc_theme">Patient Details</strong></h4>
                    </div>
                    {person && (
                      <table>
                        <tbody>
                          <tr>
                            <td width="200px">  <strong>Id:</strong> {person.id} </td>
                            <td width="300px"> <strong>Name:</strong> {person.firstname} </td>
                            <td width="200px"> <strong>Age:</strong> {person.age} </td>
                            <td width="200px"> <strong>weight:</strong> {person.weight} </td>
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
                    {person && (
                      <table>
                        <tbody>
                          <tr>
                            <td> <strong>Vaccine</strong></td>
                            <td>
                              <Input type="select" name="vaccine" id="vaccine" >
                                <option value="" key="0"> Please select </option>
                                {(this.state.vaccines || []).map((x, i) => (
                                  <option value={x.id} key={i}>{x.vaccine.vaccine}</option>
                                ))}
                              </Input>
                            </td>

                          </tr>
                          <tr>
                            <td> <strong>Remarks</strong></td>
                            <td>
                              <Input type="textarea" name="remarks" id="remarks" placeholder="" rows="5" width="400px" />

                            </td>
                          </tr>
                          <tr>
                            <td>  <button className="btn btn-primary btn-sm"> Save </button> </td>
                            <td>  <button className="btn btn-primary btn-sm"> Generate Vaccine Appointment </button> </td>
                          </tr>
                        </tbody>
                      </table>
                    )}

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
export default connect(mapStateToProps)(AppointmentView);
