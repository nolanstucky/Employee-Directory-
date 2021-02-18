import React, {useEffect, useState} from "react";
import "./style.css";
import EmployeeList from '../employeeList/index';
import {getRandomUsers} from "../../utils/API.js"

function Main() {
    const [randomUsers, setRandomUsers] = useState([]);
    const [searchUser, setSearchUser] = useState("");
    const [sorted, setSorted] = useState(false);

    useEffect(()=>{
        getRandomUsers().then(({data: {results}}) => setRandomUsers(results))
    }, []);
    
    console.log(randomUsers);
    return (

        <EmployeeList details={randomUsers}/>
    )
}

export default Main;