import React, {useEffect, useState} from "react";
import "./style.css";
import EmployeeList from '../employeeList/index';
import Search from '../search/index';
import Navbar from '../navbar/index';
import {getRandomUsers} from "../../utils/API.js"

function Main({users}) {
    console.log(users)
    const [randomUsers, setRandomUsers] = useState(users);
    const [term, setTerm] = useState("");
    const [sorted, setSorted] = useState(false);

    const handleInputChange = event => {
        setTerm(event.target.value)
    }
    const employeeFilter = randomUsers.filter(employee =>
        employee.name.first.toLowerCase().startsWith(term.toLowerCase()))

    function employeeSortByFirstName(){
        if (!sorted) {
            setRandomUsers(randomUsers.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1));
            setSorted(true);
        } else {
            setRandomUsers(randomUsers.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1));
            setSorted(false);
        }
    }

    function employeeSortByDateofBirth(){
        if (!sorted) {
            setRandomUsers(randomUsers.sort((a, b) => (a.dob.age > b.dob.age) ? 1 : -1));
            setSorted(true);
        } else {
            setRandomUsers(randomUsers.sort((a, b) => (a.dob.age > b.dob.age) ? -1 : 1));
            setSorted(false);
        }
    }
    return (
        <>
        <Navbar employeeSearch={handleInputChange}/>
        <Search 
        employeeSortByFirstName= {employeeSortByFirstName}
        employeeSortByDateofBirth= {employeeSortByDateofBirth}
        />
        <EmployeeList details={employeeFilter}/>
        </>
    )
}

export default Main;