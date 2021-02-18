import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import Main from './components/main';
import getRandomUsers from "./utils/API.js"

function App() {
  const [randomUsers, setRandomUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  //uses the api call to set randomUsers to whatever the result from the call is with setRandomUsers it then sets isloading boolean to false
  useEffect(() => {
    getRandomUsers().then(({ data: { results } }) => {
      setRandomUsers(results)
      setLoading(false)
    })
  }, []);
  //if the isLoading boolean is false it will then return <main> 
  //suspense waits for the data to come before it returns <main>
  if (!isLoading) {
    return  <Suspense><Main users={randomUsers}/></Suspense>
  } 
  
  return (
      <Main users={randomUsers}/>
  );
  
}

export default App;
