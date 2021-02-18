import axios from "axios";
//makes api call to randomuser to get a result of 200 random employee 
const getRandomUsers = function() {
  return axios.get("https://randomuser.me/api/?results=200&nat=us");
};
export default getRandomUsers;