import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import Main from './components/main';
import {getRandomUsers} from "./utils/API.js"

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
  
  return (
      <Main users={randomUsers}/>
  );
  
}

export default App;
