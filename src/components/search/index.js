import React, {useState} from 'react';
import "./style.css";
function Search({employeeSortByFirstName, employeeSortByDateofBirth}) {

    return (

        <div className="search">
            <div>
            <button onClick={employeeSortByFirstName}>Name</button>
            <button onClick={employeeSortByDateofBirth}>Date of Birth</button>
            </div>
        </div>
    )
}

export default Search;