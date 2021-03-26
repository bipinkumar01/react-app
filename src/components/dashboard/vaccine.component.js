import React, { useState, useEffect } from 'react';
//import { Button } from 'reactstrap';
import VaccineService from '../../services/vaccine.service';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import 'react-table/react-table.css'
import ReactTable from "react-table";

const Vaccines = (props) => {
  const [vaccineList, setVaccineList] = useState([]);

  const toCurrency = (val) => {
    let number = "Rs. " + val;
    return number;
  }

  useEffect(() => {
    const { user: currentUser } = props;
    console.log("currentuser", currentUser);
    VaccineService.getVaccines()
      .then(resp => {
        setVaccineList(resp.data);
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])


  console.log("vaccineList", vaccineList);
  return (
    <div className="container">
      <h4>
        <strong className="myvacc_theme"> <FontAwesomeIcon icon="fa fa-medkit" /> &nbsp;Vaccines</strong>
      </h4>

      <div>
        <ReactTable data={vaccineList || []}
          columns={[
            {
              columns: [
                {
                  Header: "Vaccine",
                  accessor: "vacctype",
                  filterable: true
                },
                {
                  Header: "Name",
                  accessor: "mname",
                },
                {
                  Header: "Manufacturer",
                  accessor: "manufacturer",
                },
                {
                  Header: "MRP",
                  accessor: "mrp",
                  Cell: props => <div> {toCurrency(props.value)} </div>
                },


              ],
            },

          ]}
          defaultPageSize={10}
          className=""
        />


      </div>

    </div>
  );
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Vaccines);