import React from "react";
import "./style.css";
import Employee from '../employee';


function EmployeeList({details}) {

    return (
        //returns the mapped through array of employees to generate each employee card
        details.map(employee => (
            <Employee details={employee}/>
        ))
    )
}

export default EmployeeList;