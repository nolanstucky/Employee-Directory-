import React from "react";
import "./style.css";

function Employee({ details}) {
    return (
        <div className="row employee">
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
                <div className="col s2">
                <p>{details.email}</p>
                </div>
                <div className="col s2">
                <p>{details.cell}</p>
                </div>
                <div className="col s2">
                <p>{details.dob.age}</p>
                </div>
        </div>
    )
}

export default Employee;