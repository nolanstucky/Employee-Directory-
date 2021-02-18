import React, {useState} from "react";
import "./style.css";
import EmployeeList from '../employeeList/index';
import Search from '../search/index';
import Navbar from '../navbar/index';


function Main({users}) {
    console.log(users)
    //users is passed in as a prop which is then set to state as randomUsers
    const [randomUsers, setRandomUsers] = useState(users);
    const [term, setTerm] = useState("");
    //tracker that is used to sort employee array
    const [sorted, setSorted] = useState(false);

    //this takes the input from the search field and sets term to whatever is typed
    const handleInputChange = event => {
        setTerm(event.target.value)
    }
    //filters the employee array using the property of first name with the input from the search field as term
    const employeeFilter = randomUsers.filter(employee =>
        employee.name.first.toLowerCase().startsWith(term.toLowerCase()))

    //function that checks if the sorted boolean is true or false and then sorts from first to last name
    function employeeSortByFirstName(){
        if (!sorted) {
            setRandomUsers(randomUsers.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1));
            setSorted(true);
        } else {
            setRandomUsers(randomUsers.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1));
            setSorted(false);
        }
    }
    //function that is similar to the one above but instead of first and last name it sorts based off of age
    function employeeSortByDateofBirth(){
        if (!sorted) {
            setRandomUsers(randomUsers.sort((a, b) => (a.dob.age > b.dob.age) ? 1 : -1));
            setSorted(true);
        } else {
            setRandomUsers(randomUsers.sort((a, b) => (a.dob.age > b.dob.age) ? -1 : 1));
            setSorted(false);
        }
    }
    //this returns the list of compononents using react fragments
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