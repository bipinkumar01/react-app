import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";
import AppointmentService from '../../services/appointment.service';
import UserService from "../../services/user.service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class AppointmentAdd extends Component {
  constructor(props) {
    super(props);
    const { user: currentUser } = props;
    console.log("currentuser", currentUser);
    var curDate = new Date();
    var tomorrowDate = new Date(curDate.setDate(curDate.getDate() + 1))
    var minDateValidate = tomorrowDate.toISOString().split('.')[0].slice(0, 16)

    // console.log("minDateValidate", minDateValidate);

    this.state = {
      aptype: "docap",
      apdate: "",
      person: "",
      phone: "",
      notes: "",
      amount: 500.00,
      status: "new",
      address: "",
      city: "",
      state: "",
      pincode: "",
      user: currentUser.user.id,
      successful: false,
      currentdate: minDateValidate,
      members: [],
    };

  }

  onChangePerson = e => this.setState({ person: e.target.value, });
  onChangeAPDate = e => this.setState({ apdate: e.target.value, });
  onChangePhone = e => this.setState({ phone: e.target.value, });
  onChangeNotes = e => this.setState({ notes: e.target.value, });
  onChangeAmount = e => this.setState({ amount: e.target.value, });
  onChangeAddress = e => this.setState({ address: e.target.value, });
  onChangeCity = e => this.setState({ city: e.target.value, });
  onChangeState = e => this.setState({ state: e.target.value, });
  onChangePincode = e => this.setState({ pincode: e.target.value, });


  gotoListing = () => {
    let flag = true;
    if (flag) {
      const { history } = this.props;
      history.push("/appointment");
      window.location.reload();
    }
  }
  componentDidMount() {

    const { user: currentUser } = this.props;
    UserService.getMembers(currentUser.user.id)
      .then(resp => {
        console.log("Members=>", resp.data);
        this.setState({ members: resp.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  saveAppointment = e => {
    e.preventDefault();
    console.log(this.state);
    AppointmentService.createAppointment(this.state)
      .then(() => {
        this.setState({ successful: true });
      })
      .catch(() => {
        this.setState({ successful: false, });
      });
  }
  render() {
    return (
      <div className="col-md-12">
        <div className="content">
          <div className="container">
            <br></br>
            <hr></hr>
            <div className="row">
              {/* <div className="col-md-3 order-md-2">
                <img src="./images/login_vaccine2.jpg" alt="Image" className="img-fluid" />
              </div> */}
              <div className="col-md-12 contents">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <div className="mb-3">
                      <h4><strong className="myvacc_theme"><FontAwesomeIcon icon="notes-medical" />&nbsp;Doctor Appointment</strong></h4>
                    </div>

                    {!this.state.successful && (
                      <Form onSubmit={this.saveAppointment} autocomplete="off">
                        <Row form>

                          <FormGroup className="col-md-9">
                            <Label for="person">Select your Family Member</Label>
                            <Input type="select" name="person" id="person"
                              value={this.state.person}
                              onChange={this.onChangePerson}>
                               <option value="" key="0"> Please select </option>
                                {(this.state.members || []).map((x, i) => (
                                  <option value={x.id} key={i}>{ x.firstname }</option>
                                ))}
                            </Input>
                          </FormGroup>

                          <FormGroup className="col-md-9">
                            <label>Date of Appointment</label>
                            <Input type="datetime-local" name="apdate" id="apdate"
                              value={this.state.apdate}
                              onChange={this.onChangeAPDate}
                              placeholder="Date of Appointment"
                              min={this.state.currentdate}
                            />

                          </FormGroup>

                          <FormGroup className="col-md-9">
                            {/* <Label for="amount">Fee</Label> */}
                            <Input type="text" name="amount" id="amount" disabled
                              value={this.state.amount}
                              onChange={this.onChangeAmount}
                              placeholder="Fee"
                            />
                          </FormGroup>
                          <FormGroup className="col-md-9">
                            <Input type="text" name="address" id="address"
                              value={this.state.address}
                              onChange={this.onChangeAddress}
                              placeholder="Address"
                            />
                          </FormGroup>

                          <FormGroup className="col-md-9">
                            <Input type="text" name="city" id="city"
                              value={this.state.city}
                              onChange={this.onChangeCity}
                              placeholder="City" />
                          </FormGroup>
                          <FormGroup className="col-md-9">

                            <Input type="text" name="state" id="state"
                              value={this.state.state}
                              onChange={this.onChangeState}
                              placeholder="State" />
                          </FormGroup>

                          <FormGroup className="col-md-9">
                            <Input type="text" name="pincode" id="pincode"
                              value={this.state.pincode}
                              onChange={this.onChangePincode}
                              placeholder="Pincode"
                            />
                          </FormGroup>

                        </Row>
                        <Row form>
                          <FormGroup className="col-md-9">
                            <Input type="textarea" name="zip" id="exampleZip" placeholder="Notes" rows="3" />
                          </FormGroup>

                          <FormGroup className="col-md-9">
                            <Label for="examplePassword">File Upload</Label>
                            <input type="file" disabled />

                          </FormGroup>
                        </Row>
                        <Row form>

                          <FormGroup className="col-md-9">
                            <a href="#/" >pre check list</a>
                          </FormGroup>
                        </Row>
                        <Row form>

                          <FormGroup className="col-md-9">
                            I agree &nbsp; &nbsp; &nbsp; <Input type="checkbox" /></FormGroup>

                        </Row>
                        <Row form className="align-items-center">
                          <Col md={1}></Col>
                          <Col md={3}> <Button className="btn-primary">Submit</Button></Col>
                          <Col md={1}></Col>
                          <Col md={3}> <Button className="btn-primary" onClick={this.gotoListing}>Back</Button></Col>
                          <Col md={1}></Col>
                        </Row>
                        <br></br>
                      </Form>)}
                    {this.state.successful && (
                      <div>
                        <p> Appointment created successful </p>
                        <Button onClick={this.gotoListing}>Go List</Button>
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
export default connect(mapStateToProps)(AppointmentAdd);
