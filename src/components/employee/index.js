import React from "react";
import "./style.css";

function Employee({ details }) {
    return (
        <div className="row employee">
            <div className="col s2">
                <img
                    className="circle"
                    src={details.image}
                    alt="employee"
                />
                </div>
                <div className="col s2">
                <p>{details.name}</p>
                </div>
                <div className="col s2">
                <p>{details.email}</p>
                </div>
                <div className="col s2">
                <p>{details.phone}</p>
                </div>
                <div className="col s2">
                <p>{details.dob}</p>
                </div>
        </div>
    )
}

export default Employee;