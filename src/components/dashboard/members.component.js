import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import UserService from '../../services/user.service';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import 'react-table/react-table.css'
import ReactTable from "react-table";

const Members = (props) => {
  const [memberList, setMembersList] = useState([]);
  const addFamilyMember = () => {
    console.log("addFamilyMember");
    let flag = true;
    if (flag) {
      const { history } = props;
      history.push("/member/add");
      window.location.reload();
    }
  }

  useEffect(() => {
    const { user: currentUser } = props;
    console.log("currentuser", currentUser);
    UserService.getMembers(currentUser.user.id)
      .then(resp => {
        setMembersList(resp.data);
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  const gotoViewPage = row => {

    let viewurl = "/member/view/";

    const { history } = props;
    history.push(viewurl + row.id);
    window.location.reload();

  }

  console.log("memberList", memberList);
  return (
    <div className="container">
      <h4>
        <strong className="myvacc_theme"> <FontAwesomeIcon icon="users" /> &nbsp;Family Members</strong>

        <button className="btn btn-primary btn-sm add-button" onClick={addFamilyMember}><FontAwesomeIcon icon="user-plus" /> Add Memebr </button>
      </h4>

      <br></br>


      <div>
        <ReactTable data={memberList || []}
          columns={[
            {
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstname",
                  filterable: true
                },
                {
                  Header: "Last Name",
                  accessor: "lastname",
                },
                {
                  Header: "Phone",
                  accessor: "phone",
                },
                {
                  Header: "Email",
                  accessor: "email",
                },
                {
                  Header: "Gender",
                  accessor: "gender",
                },
                {
                  Header: "Relation",
                  accessor: "relation",
                },

                {
                  Header: "Date Created",
                  id: "created_at",
                  accessor: (d) => d.created_at.split("T")[0],
                },
                {
                  Header: "Actions",
                  accessor: "id",
                  Cell: (row) => (
                    <div className="d-block w-100 text-center">

                      <Button className="ladda-button mb-2 mr-2 btn-icon btn-icon-only btn-info" title="Member Details" onClick={() => gotoViewPage(row.row)} >view more
                                              {/* <i className="lnr-eye btn-icon-wrapper"> </i> */}
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

    </div>
  );
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Members);