import React, { useState, useEffect } from 'react';
import {  Button } from 'reactstrap';

import AppointmentService from '../../services/appointment.service';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-table/react-table.css'
import ReactTable from "react-table";


const Appointment = (props) => {
  const [appointmentList, setAppointmentList] = useState([]);

  const addAppointment = () => {
    console.log("addAppointment");
    let flag = true;
    if (flag) {
      const { history } = props;
      history.push("/appointment/add");
      window.location.reload();
    }
  }

  const { user: session } = props;
  const role = session.user.role;
  const role_type = role.type;
  
  const gotoViewPage = row =>{

    let viewurl = "/appointment/view/";
    if(role_type==="authenticated"){
      viewurl = viewurl + "patient/";
    } else  if(role_type==="doctor"){
      viewurl = viewurl + "doctor/";
    } else  if(role_type==="tech"){
      viewurl = viewurl + "tech/";  
    }
    const { history } = props;
    history.push(viewurl+row.id);
    window.location.reload();
    
  }

  useEffect(() => {
    AppointmentService.getAppointments(session.user)
      .then(resp => {
        console.log(resp.data);
        setAppointmentList(resp.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  //console.log("appointmentList", appointmentList);
  return (

    <div className="container">

      <h4>
        <strong className="myvacc_theme"><FontAwesomeIcon icon="notes-medical" /> Appointment List </strong>
        { role && role.type == "authenticated" && (
        <button className="btn btn-primary btn-sm add-button" onClick={addAppointment}><FontAwesomeIcon icon="user-md" /> New Appointment </button>
        )}
      </h4>
      <br></br>
      <div>
        <ReactTable data={appointmentList || []}
          columns={[
            {
              columns: [
               
                {
                  Header: "Name",
                  accessor: "person.firstname",
                  filterable: true
                },
                {
                  Header: "Date",
                  id: "apdate",
                  accessor: (d) =>d.apdate && d.apdate.split("T")[0],
                },
                {
                  Header: "AP-Type",
                  id: "aptype",
                  accessor: (d) => d.aptype === "vaccap" ? "Vaccine" :"Doctor",
                },
                {
                  Header: "Phone",
                  accessor: "phone",
                },
                {
                  Header: "City",
                  accessor: "city",
                },             
                {
                  Header: "Actions",
                  accessor: "id",
                  Cell: (row) => (
                    <div className="d-block w-100 text-center">
                      <Button className="ladda-button mb-2 mr-2 btn-icon btn-icon-only btn-info" title="Project Details" onClick={ () => gotoViewPage(row.row)} >view more
                                              
                      </Button>
                    </div>
                  ),
                }

              ],
            },

          ]}
          defaultPageSize={5}
          className=""
        />
      </div>
    </div >
  );
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Appointment);