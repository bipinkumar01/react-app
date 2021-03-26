import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

const Members = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        { name: "Patient1", age: 20, sex: 'Male' },
        { name: "Patient2", age: 25, sex: 'Female' },
        { name: "Patient3", age: 30, sex: 'Male' }
    ]);

    const onButtonClick = e => {
      console.log(e);
      /*
      const selectedNodes = gridApi.getSelectedNodes()
      const selectedData = selectedNodes.map( node => node.data )
      const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
      alert(`Selected nodes: ${selectedDataStringPresentation}`)
      */
  }
  const showRowDetails = row => {
    console.log("row====>",row);
  }

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
                rowSelection="multiple" rowDoubleClicked="showRowDetails"
                rowData={rowData}>
                <AgGridColumn headerName="Full Name" field="name" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn headerName="Age" field="age" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn headerName="Sex" field="sex" sortable={ true } filter={ true }></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default Members;