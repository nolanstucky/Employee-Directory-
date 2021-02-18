import React from "react";
import "./style.css";
import Employee from '../employee';


function EmployeeList({details}) {

    return (
        details.map(employee => (
            <Employee details={employee}/>
        ))
    )
}

export default EmployeeList;