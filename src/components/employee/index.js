import React from "react";
import "./style.css";
import EmployeeBorder from '../employeeborder/index';

function Employee({ details }) {
    return (
        <div className="row employee flow-text">
            <EmployeeBorder/>
            <div id="employee">
            <div className="col s2">
                <img
                    className="circle"
                    src={details.picture.large}
                    alt="employee"
                />
            </div>
            <div className="col s2">
                <p>{details.name.first} {details.name.last}</p>
            </div>
            <div className="col s4">
                <p>{details.email}</p>
            </div>
            <div className="col 2">
                <p>{details.cell}</p>
            </div>
            <div className="col s2">
                <p>{details.dob.age}</p>
            </div>
            </div>
        </div>
    )
}

export default Employee;