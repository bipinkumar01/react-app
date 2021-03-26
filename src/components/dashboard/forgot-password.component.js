import React, {Component} from "react";
import {Modal, Button } from 'react-bootstrap';
import { isEmail } from "validator";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";

const required = (value) => {
    if (!value) {
        return (
        <div className="alert alert-danger" role="alert">
            This field is required!
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

export class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);

        this.state = {
            email: "",
            successful: false,
        };
    }

    onChangeEmail(e) {
        this.setState({
          email: e.target.value,
        });
    }

    // handleRegister(e) {
    //     e.preventDefault();
    
    //     this.setState({
    //       successful: false,
    //     });
    
    //     this.form.validateAll();
    
    //     const { history } = this.props;
    
    //     if (this.checkBtn.context._errors.length === 0) {
    //       this.props
    //         .dispatch(
    //           register(this.state.username, this.state.email, this.state.password,
    //             this.state.confirmPassword, this.state.mobile, this.state.firstname,
    //             this.state.lastname, this.state.dob)
    //         )
    //         .then(() => {
    //           history.push("/home");
    //           window.location.reload();
    //           this.setState({
    //             successful: true,
    //           });
    //         })
    //         .catch(() => {
    //           this.setState({
    //             successful: false,
    //           });
    //         });
    //     }
    // }
    

    render(){
        return(
            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        FORGOT PASSWORD
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}
