import React from 'react';
import "./style.css";
import Search from '../search/index';
function Navbar({employeeSearch}) {
    return (
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