import React, {useState} from 'react';
import "./style.css";
import Main from '../main/index';
function Search({employeeSearch, employeeSortByFirstName, employeeSortByDateofBirth}) {

    const handleSubmit = event => {
        event.preventDefault();
    }
    return (

        
        <div className="search">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={employeeSearch}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                 </button>

            </form>
            <div className="center">
            <button onClick={employeeSortByFirstName}>Name</button>
            <button onClick={employeeSortByDateofBirth}>Date of Birth</button>
            </div>
        </div>
    )
}

export default Search;