import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import Navbar from "./components/navbar/index"
import Search from "./components/search/index"
import Employee from './components/employee';
import Main from './components/main';
import {getRandomUsers} from "./utils/API"

function App() {
  const [randomUsers, setRandomUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getRandomUsers().then(({ data: { results } }) => {
      setRandomUsers(results)
      setLoading(false)
    })
  }, []);

  if (!isLoading) {
    return  <Suspense><Main users={randomUsers}/></Suspense>
  } 
  
}

export default App;
