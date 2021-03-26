import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from "react-redux";
import UserService from '../../services/user.service';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class MemberEdit extends Component {
  constructor(props) {
    super(props);
    this.onChangeDob = this.onChangeDob.bind(this);

    var curDate = new Date();
    var maxDateValidate = curDate.toISOString().split('T')[0]
    console.log("maxDateValidate", maxDateValidate);
    this.state = {
      firstname: "",
      lastname: "",
      gender: " ",
      email: "",
      phone: "",
      dob: "",
      age: 0,
      relation: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      //  user: currentUser.user.id,
      successful: false,
      maxDob: maxDateValidate
    };
  }



  componentDidMount() {

    const { user: session } = this.props;
    const id = this.props.match.params.id;
    console.log("params", id)


    UserService.getMember(id)
      .then(resp => {
        console.log("member id", resp.data);
        this.setState({ person: resp.data });

        this.setState({ firstname: resp.data.firstname });
        this.setState({ lastname: resp.data.lastname });
        this.setState({ gender: resp.data.gender });
        this.setState({ email: resp.data.email });
        this.setState({ phone: resp.data.phone });
        this.setState({ dob: resp.data.dob });
        this.setState({ age: resp.data.age });
        this.setState({ weight: resp.data.weight });
        this.setState({ height: resp.data.height });
        this.setState({ relation: resp.data.relation });
        this.setState({ address: resp.data.address });
        this.setState({ city: resp.data.city });
        this.setState({ state: resp.data.state });
        this.setState({ pincode: resp.data.pincode });


      })
      .catch(error => {
        console.log(error);
      });


  }



  onChangeFirstname = e => this.setState({ firstname: e.target.value, });
  onChangeLastname = e => this.setState({ lastname: e.target.value, });
  onChangeGender = e => this.setState({ gender: e.target.value, });
  onChangeEmail = e => this.setState({ email: e.target.value, });
  onChangePhone = e => this.setState({ phone: e.target.value, });
  onChangeWeight = e => this.setState({ weight: e.target.value, });
  onChangeHeight = e => this.setState({ height: e.target.value, });
  onChangeRelation = e => this.setState({ relation: e.target.value, });
  onChangeAddress = e => this.setState({ address: e.target.value, });
  onChangeCity = e => this.setState({ city: e.target.value, });
  onChangeState = e => this.setState({ state: e.target.value, });
  onChangePincode = e => this.setState({ pincode: e.target.value, });
  onChangeDob(e) {
    var age_latest = this.calculate_age_edit(e.target.value);
    console.log(age_latest);
    this.age = age_latest;
    this.setState({
      dob: e.target.value,
      age: age_latest['age_latest']
    });
  }

  calculate_age_edit = (dob1) => {
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

  gotoListing = () => {
    let flag = true;
    if (flag) {
      const { history } = this.props;
      history.push("/member");
      window.location.reload();
    }
  }

  updateMember = e => {
    e.preventDefault();
    //  console.log("update Member==>", this.state);
    var updatedData = this.state
    var mid = this.state.person.id;

    delete updatedData["person"];
    delete updatedData["age"];
    updatedData.age = this.calculate_age_edit(updatedData.dob);



    UserService.updateMember(mid, updatedData)
      .then((res) => {
        //  console.log("updated Res", res)
        this.setState({ successful: true });
      })
      .catch(() => {
        this.setState({ successful: false, });
      });

  }


  render() {
    const person = this.state.person;
    return (
      <div className="content">
        <div className="container">
          <br></br>
          <hr></hr>
          <div className="row">
            <div className="col-md-3 order-md-2">
              {/* <image src="./images/login_vaccine2.jpg" alt="Image" className="img-fluid" /> */}
            </div>
            <div className="col-md-9 contents">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div className="mb-9">
                    <h4><strong className="myvacc_theme"><FontAwesomeIcon icon="user" />&nbsp;Edit Family Member</strong></h4>

                  </div>
                  <br></br>
                  {!this.state.successful && (
                    <Form onSubmit={this.updateMember} autoComplete="off"
                      ref={(c) => { this.form = c; }
                      } >
                      {person && (
                        <div>
                          <Row form>
                            <FormGroup className="col-md-9">

                              <Input
                                type="text" name="firstname" id="firstname"
                                value={this.state.firstname}
                                onChange={this.onChangeFirstname}
                                placeholder="First Name"
                              />
                            </FormGroup>

                            <FormGroup className="col-md-9">

                              <Input
                                type="text" name="lastname" id="lastname"
                                value={this.state.lastname}
                                onChange={this.onChangeLastname}
                                placeholder="Last Name"
                              />
                            </FormGroup>
                            <FormGroup className="col-md-9">

                              <Input
                                type="text" name="email" id="email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                placeholder="Email"
                              />
                            </FormGroup>

                            <FormGroup className="col-md-9">

                              <Input
                                type="select" name="gender" id="gender"
                                value={this.state.gender}
                                onChange={this.onChangeGender}
                                placeholder="Gender"
                              >
                                <option value=" ">Choose Gender</option>
                                <option value="Male">Male</option>

                                <option value="Female">Female</option>
                              </Input>
                            </FormGroup>

                          </Row>
                          <Row form>

                            <FormGroup className="col-md-9">

                              <Input
                                type="number" name="phone" id="phone"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                                placeholder="Mobile No."
                              />
                            </FormGroup>


                            <FormGroup className="col-md-9">
                              <label>Date of Birth</label>
                              <Input type="date" name="dob" id="dob"
                                value={this.state.dob}
                                onChange={this.onChangeDob}
                                placeholder="Date of Birth"
                                max={this.state.maxDob}
                              />
                            </FormGroup>

                            <FormGroup className="col-md-9">
                              <label>Age (in Years)</label>
                              <Input type="text" name="age" id="age"
                                value={this.state.age}
                                // onChange={this.onChangeAge}
                                placeholder="Age (in Years)" readOnly />
                            </FormGroup>

                            <FormGroup className="col-md-9">

                              <Input type="text" name="weight" id="weight"
                                value={this.state.weight}
                                onChange={this.onChangeWeight}
                                placeholder="Weight (in Kgs)" />
                            </FormGroup>
                            <FormGroup className="col-md-9">

                              <Input type="text" name="height" id="height"
                                value={this.state.height}
                                onChange={this.onChangeHeight}
                                placeholder="Height (in cm)" />
                            </FormGroup>


                          </Row>
                          <Row form>

                            <FormGroup className="col-md-9">
                              <Input type="text" name="relation" id="relation"
                                value={this.state.relation}
                                onChange={this.onChangeRelation}
                                placeholder="Relation" />
                            </FormGroup>

                            <FormGroup className="col-md-9">
                              <Input type="textarea" name="address" id="address"
                                value={this.state.address}
                                onChange={this.onChangeAddress}
                                placeholder="Address"
                                rows="3"
                              />
                            </FormGroup>

                          </Row>
                          <Row form>

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
                                placeholder="Pincode" />
                            </FormGroup>

                          </Row>
                        </div>)}
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
                      <p> Member updated successful </p>
                      <Button onClick={this.gotoListing}>Go List</Button>
                    </div>
                  )}


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
export default connect(mapStateToProps)(MemberEdit);
