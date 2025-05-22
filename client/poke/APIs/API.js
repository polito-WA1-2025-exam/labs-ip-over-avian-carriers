import axios from 'axios';
const APIURL = 'http://localhost:3000';


async function loginUser(username, password) {
    try {
      const response = await axios.post(`${APIURL}/sessions`, {
        username,
        password,
      }, { withCredentials: true }); // Include credentials in the request
      return response.data; // Axios automatically parses JSON
    } catch (error) {
      console.error('Error logging in:', error);
      throw error; // Re-throw the error for further handling
    }
  }

async function logoutUser() {
    try {
      const response = await axios.delete(`${APIURL}/sessions/current`, { withCredentials: true });
      return response.data; // Axios automatically parses JSON
    } catch (error) {
      console.error('Error logging out:', error);
      throw error; // Re-throw the error for further handling
    }
}  


async function getProteins() {
    try {
      const response = await axios.get(`${APIURL}/proteins`);
      return response.data; // Axios automatically parses JSON
    } catch (error) {
      console.error('Error fetching proteins:', error);
      throw error; // Re-throw the error for further handling
    }
  }
  
async function getIngredients() {
    try {
      const response = await axios.get(`${APIURL}/ingredients`);
      return response.data; // Axios automatically parses JSON
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      throw error; // Re-throw the error for further handling
    }
  }

async function getUserOrders(email) {
    try {
      const response = await axios.get(`${APIURL}/orders/${email}`, {withCredentials: true});
      return response.data; // Axios automatically parses JSON
    } catch (error) {
      console.error('Error fetching user orders:', error);
      throw error; // Re-throw the error for further handling
    }
  }

async function getSizes(){
    try {
      const response = await axios.get(`${APIURL}/sizes`);
      return response.data; // Axios automatically parses JSON
    } catch (error) {
      console.error('Error fetching sizes:', error);
      throw error; // Re-throw the error for further handling
    }
}
  



export { getProteins, getIngredients, getUserOrders, getSizes, loginUser, logoutUser };