import React from 'react';
import "./style.css";
function Navbar({employeeSearch}) {
    return (
        //returns the navbar that is a input field taking in user input to handle the useState to filter through employees by names string
        <nav>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" onChange={employeeSearch}/>
                        <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;