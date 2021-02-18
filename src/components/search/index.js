import React from 'react';
import "./style.css";
function Search({employeeSortByFirstName, employeeSortByDateofBirth}) {

    return (
        //returns search buttons that when pressed runs the employeesort function either by name or date of birth
        <div className="search">
            <div>
            <button onClick={employeeSortByFirstName}>Name</button>
            <button onClick={employeeSortByDateofBirth}>Date of Birth</button>
            </div>
        </div>
    )
}

export default Search;