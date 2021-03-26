import React, { Component } from "react";
import { Col, Row, Button } from 'reactstrap';
import { connect } from "react-redux";
import UserService from '../../services/user.service';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class MemberView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      apdate: "",
      person: {},
    };
  }
  gotoListing = () => {
    let flag = true;
    if (flag) {
      const { history } = this.props;
      history.push("/member");
      window.location.reload();
    }
  }



  componentDidMount() {

    const { user: session } = this.props;
    const id = this.props.match.params.id;
    console.log("params", id)


    UserService.getMember(id)
      .then(resp => {
        console.log("member id", resp.data);
        this.setState({ person: resp.data })

      })
      .catch(error => {
        console.log(error);
      });


  }
  gotoViewPage = mid => {
    const { history } = this.props;
    history.push("/member/edit/" + mid);
    window.location.reload();
  }

  render() {
    const person = this.state.person;

    return (
      <div className="col-md-12">

        <div className="content">
          <div className="container">
            <br></br>
            <hr></hr>
            <div className="row">
              <div className="col-md-3 order-md-2">
                <image src="./images/login_vaccine2.jpg" alt="viewmember" className="img-fluid" />
              </div>
              <div className="col-md-9 contents">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <div className="mb-9">
                      <h4><strong className="myvacc_theme"><FontAwesomeIcon icon="user" />&nbsp;Member Details</strong></h4>

                    </div>
                    <br></br>
                    {person && (
                      <div className="col-md-9">
                        <Row>
                          <div className="col-md-4">First Name</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.firstname}</div>
                        </Row>
                        <Row>
                          <div className="col-md-4">Last Name</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.lastname}</div>
                        </Row>
                        <Row>
                          <div className="col-md-4">Gender</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.gender}</div>
                        </Row>
                        <Row>
                          <div className="col-md-4">Phone</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.phone}</div>
                        </Row>
                        <Row>
                          <div className="col-md-4">Email</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.email}</div>
                        </Row>
                        <Row>
                          <div className="col-md-4">Date of Birth</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.dob}</div>
                        </Row>
                        <Row>
                          <div className="col-md-4">Age</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.age}</div>
                        </Row>
                        <Row>
                          <div className="col-md-4">Weight</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.weight}</div>
                        </Row>
                        <Row>
                          <div className="col-md-4">Height</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.height}</div>
                        </Row>
                        <Row>
                          <div className="col-md-4">Relation</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.relation}</div>
                        </Row>
                        <Row>
                          <div className="col-md-4">Address</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.address}</div>
                        </Row>
                        <Row>
                          <div className="col-md-4">City</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.city}</div>
                        </Row>
                        <Row>
                          <div className="col-md-4">State</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.state}</div>
                        </Row>
                        <Row>
                          <div className="col-md-4">Pincode</div>
                          <div className="col-md-1">:</div>
                          <div className="col-md-4">{person.pincode}</div>
                        </Row>





                        <Row className="align-items-center">
                          <Col md={1}></Col>
                          <Col md={3}> <Button className="btn-primary" onClick={() => this.gotoViewPage(person.id)}>Edit</Button></Col>
                          <Col md={1}></Col>
                          <Col md={3}> <Button className="btn-primary" onClick={this.gotoListing}>Back</Button></Col>
                          <Col md={1}></Col>
                        </Row>
                        <br></br>

                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(MemberView);
