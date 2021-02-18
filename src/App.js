import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/index"
import Search from "./components/search/index"
import Employee from './components/employee';

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
    <Employee details={testEmployee}/>
    </>
  );
}

export default App;
