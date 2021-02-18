import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/navbar/index"
import Search from "./components/search/index"
import Employee from './components/employee';
import Main from './components/main';
const testEmployee = {
  
    "id": 1,
    "image": "https://randomuser.me/api/portraits/women/90.jpg",
    "name": "Lisa Simpson",
    "dob": '04/10/1998',
    "email": "lissimp@email.com",
    "phone": "555-321-2345"
  
}

function App() {
  return (
    <>
    <Navbar/>
    <Search/>
    <Main/>
    </>
  );
}

export default App;
