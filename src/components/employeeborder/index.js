import React from "react";
import "./style.css";

function EmployeeBorder() {
    return (
        <div className="row border flow-text">
            <div className="col s2">
            </div>
            <div className="col s2">
                <p>Name:</p>
            </div>
            <div className="col s4">
                <p>Email:</p>
            </div>
            <div className="col 2">
                <p>PhoneNumber:</p>
            </div>
            <div className="col s2">
                <p>Age:</p>
            </div>
        </div>
    )
}

export default EmployeeBorder;